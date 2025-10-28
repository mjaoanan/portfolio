
import React, { useState, useRef, useEffect } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Thank you for your message! I will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
    // In a real application, you would handle form submission here (e.g., API call).
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-20 bg-slate-100 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-lg text-slate-600">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
              >
                Send Message
              </button>
            </div>
            {formStatus && (
              <p className="text-center text-green-600 mt-4">{formStatus}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
