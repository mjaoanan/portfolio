import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsCarousel from './components/ProjectsCarousel';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm'
import BackToTopButton from './components/BackToTopButton';
import { projects, experiences } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <ProjectsCarousel projects={projects} />
        <ExperienceSection experiences={experiences} />
        <SkillsSection />
        <ContactForm />
      </main>
      <footer className="bg-slate-900 text-white py-6 text-center">
          <p>&copy; 2024 Mirafe-Joy Aoanan. All Rights Reserved.</p>
      </footer>
      <BackToTopButton />
    </div>
  );
};

export default App;
