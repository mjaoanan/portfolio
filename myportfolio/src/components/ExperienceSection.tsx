
import React, { useState, useRef, useEffect } from 'react';
import { Experience } from '../types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceCard: React.FC<Experience> = ({ company, role, date, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = cardRef.current;
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
    <div
      ref={cardRef}
      className={`relative pl-8 sm:pl-12 py-6 group transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="flex items-center mb-1 sm:mb-0">
        <div className="absolute left-0 sm:left-4 h-full w-px bg-slate-300"></div>
        <div className="absolute left-[-6px] sm:left-[10px] h-4 w-4 rounded-full bg-teal-600 z-10 border-4 border-slate-50 group-hover:scale-125 transition-transform duration-300"></div>
        <h3 className="text-xl font-bold text-slate-900">{company}</h3>
      </div>
      <p className="text-sm font-semibold text-teal-600 sm:pl-10">{role}</p>
      <p className="text-sm text-slate-500 mt-1 sm:pl-10">{date}</p>
      <ul className="mt-4 space-y-2 list-disc list-inside text-slate-600 sm:pl-10">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
};


const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section 
      id="experience"
      className="py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
