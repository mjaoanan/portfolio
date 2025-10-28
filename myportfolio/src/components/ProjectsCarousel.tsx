
import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 bg-slate-100 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="relative h-[600px] md:h-[500px] w-full max-w-5xl mx-auto group">
          <div className="overflow-hidden w-full h-full rounded-lg shadow-2xl">
            <div
              className="flex transition-transform ease-in-out duration-500 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full bg-white grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full overflow-hidden">
                     <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out" />
                     <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <p className="text-sm font-semibold text-teal-600">{project.date}</p>
                    <h3 className="text-2xl font-bold mt-2 text-slate-900">{project.title}</h3>
                    <p className="text-md text-slate-500 mt-1">{project.role}</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-slate-600">
                      {project.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    {project.projectUrl && (
                        <a 
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block w-full sm:w-auto text-center px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-colors duration-300 shadow-sm"
                        >
                            View Project Site
                        </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={goToPrevious} className="absolute top-1/2 left-0 md:-left-6 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 z-10">
            <ChevronLeftIcon className="h-6 w-6 text-slate-700" />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-0 md:-right-6 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 z-10">
            <ChevronRightIcon className="h-6 w-6 text-slate-700" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => goToSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-4 bg-teal-600' : 'bg-slate-300 hover:bg-slate-400'}`}
                    aria-label={`Go to slide ${index + 1}`}
                ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
