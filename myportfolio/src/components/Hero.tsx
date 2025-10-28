
import React, { useState, useEffect, useRef } from 'react';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LinkedInIcon } from './icons/LinkedinIcon';
import { DownloadIcon } from './icons/DownloadIcon';


const Hero: React.FC = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef} 
      className="pt-24 md:pt-32 pb-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Mirafe-Joy Aoanan
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-teal-600 font-semibold">
              Business & Technology Professional
            </p>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-slate-600">
              A results-oriented business graduate from the University of Washington with a passion for leveraging data and technology to solve complex problems. Eager to apply skills in data analysis, business development, and project management to drive impactful business outcomes.
            </p>
            <div className="mt-10">
                <a 
                    href="/resume.pdf" 
                    download
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-md"
                >
                    <DownloadIcon className="h-5 w-5 mr-3" />
                    Download Resume
                </a>
            </div>
            <div className="mt-8 flex justify-center md:justify-start items-center flex-wrap gap-x-6 gap-y-4">
                <a href="mailto:mirajoyaoanan@gmail.com" className="flex items-center text-slate-600 hover:text-teal-600 transition-colors">
                    <MailIcon className="h-5 w-5 mr-2" />
                    mirajoyaoanan@gmail.com
                </a>
                <a href="tel:+1-206-693-0546" className="flex items-center text-slate-600 hover:text-teal-600 transition-colors">
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    (206) 693-0546
                </a>
                <a href="https://www.linkedin.com/in/mjaoanan" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 hover:text-teal-600 transition-colors">
                    <LinkedInIcon className="h-5 w-5 mr-2" />
                    linkedin.com/in/mjaoanan
                </a>
            </div>
          </div>
          
          {/* Right Column */}
          <div className={`flex flex-col items-center space-y-8 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 ease-in-out hover:scale-105">
                <img 
                    src="../assets/Portfolioimg.jpg" 
                    alt="Mirafe-Joy Aoanan" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full max-w-md">
                <div className="bg-slate-50 p-8 rounded-lg shadow-md border border-slate-200 text-left w-full">
                    <h3 className="text-xl font-bold text-slate-900">University of Washington, Michael G. Foster School of Business</h3>
                    <p className="text-md text-teal-600 font-semibold mt-1">Bachelor of Arts in Business Administration</p>
                    <p className="text-md text-slate-600">Concentration: Marketing & Information Systems</p>
                    <p className="text-sm text-slate-500 mt-2">Sep 2021 - Jun 2025</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
