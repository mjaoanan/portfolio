
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void; isActive: boolean }> = ({ href, children, onClick, isActive }) => (
    <a 
      href={href} 
      onClick={onClick} 
      className={`transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium ${
        isActive 
          ? 'font-bold text-teal-700' 
          : 'text-slate-600 hover:text-teal-600'
      }`}
    >
        {children}
    </a>
);

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { href: '#home', text: 'Home' },
        { href: '#projects', text: 'Projects' },
        { href: '#experience', text: 'Experience' },
        { href: '#skills', text: 'Skills' },
        { href: '#contact', text: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial active section

        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);


    return (
        <nav className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-xl font-bold text-teal-700">Mirafe-Joy Aoanan</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => (
                                <NavLink 
                                    key={link.href} 
                                    href={link.href}
                                    isActive={activeSection === link.href.substring(1)}
                                >
                                    {link.text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-slate-100 inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-teal-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                           <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} 
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                                    activeSection === link.href.substring(1) 
                                        ? 'font-bold bg-slate-200 text-teal-700' 
                                        : 'text-slate-600 hover:bg-slate-200 hover:text-teal-600'
                                }`}
                            >
                               {link.text}
                           </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
