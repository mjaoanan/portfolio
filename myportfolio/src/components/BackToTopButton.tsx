
import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons/ArrowUpIcon';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                    aria-label="Go to top"
                >
                    <ArrowUpIcon className="h-6 w-6" />
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
