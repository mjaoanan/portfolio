
import React, { useState, useRef, useEffect } from 'react';

const SkillCard: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
    <div>
        <h4 className="text-lg font-semibold text-teal-700 mb-3">{title}</h4>
        <ul className="space-y-2">
            {skills.map((skill, i) => (
                <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600">{skill}</span>
                </li>
            ))}
        </ul>
    </div>
);

const SkillsSection: React.FC = () => {
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

  const technicalSkills = {
    "Business & CRM Tools": ["Salesforce", "SaaS Platforms"],
    "Data & Analytics": ["Tableau", "SQL", "Python", "R", "Excel", "Data-Driven Decision-Making"],
    "Project Management": ["Asana", "Agile & Scrum Methodologies"],
  };

  const softSkills = {
    "Strategic Competencies": ["Strategic Planning", "Client Relationship Management", "Data-Informed Strategy"],
    "Communication & Collaboration": ["Storytelling", "Cross-Functional Collaboration", "Client-Facing Presentations", "Influencing Stakeholders"],
    "Business Acumen": ["Market Research", "Business Operations & Analytics", "Process Improvement", "OKR & KPI Development"],
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-20 bg-slate-100 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Tools</h2>
        <div className="max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-900 border-b-2 border-teal-500 pb-2">Technical Proficiencies</h3>
                    <div className="space-y-6">
                        {Object.entries(technicalSkills).map(([title, skills]) => (
                            <SkillCard key={title} title={title} skills={skills} />
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-900 border-b-2 border-teal-500 pb-2">Business Acumen</h3>
                    <div className="space-y-6">
                        {Object.entries(softSkills).map(([title, skills]) => (
                            <SkillCard key={title} title={title} skills={skills} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
