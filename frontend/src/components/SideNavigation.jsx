import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SECTIONS = [
    // mode: 'dark'  -> White Text + Darkened Background
    // mode: 'light' -> Black Text + Light Blue Radial Blur Background
    { id: 'hero', label: 'Home', mode: 'dark' },
    { id: 'products', label: 'Products', mode: 'light' },
    { id: 'why-us', label: 'Why Us', mode: 'dark' },
    { id: 'impact', label: 'Impact', mode: 'dark' },
    { id: 'features', label: 'Features', mode: 'light' },
    { id: 'faq', label: 'Q&A', mode: 'light' },
];

const SideNavigation = () => {
    const [activeId, setActiveId] = useState('hero');
    const [currentMode, setCurrentMode] = useState('dark');

    useEffect(() => {
        const handleScroll = () => {
            // Trigger change when the section hits the middle of the viewport
            const centerOfScreen = window.scrollY + (window.innerHeight / 2);

            SECTIONS.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (centerOfScreen >= offsetTop && centerOfScreen < offsetTop + offsetHeight) {
                        if (activeId !== section.id) {
                            setActiveId(section.id);
                            setCurrentMode(section.mode);
                        }
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger immediately on load
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeId]);

    // Handle Global Text Color (White vs Black)
    useEffect(() => {
        const body = document.body;
        if (currentMode === 'dark') {
            body.classList.remove('text-black');
            body.classList.add('text-white');
        } else {
            body.classList.remove('text-white');
            body.classList.add('text-black');
        }
        // Add transition for smooth text color swap
        body.classList.add('transition-colors', 'duration-700');
    }, [currentMode]);

    const handleNav = (direction) => {
        const currentIndex = SECTIONS.findIndex((sec) => sec.id === activeId);
        const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex >= 0 && nextIndex < SECTIONS.length) {
            document.getElementById(SECTIONS[nextIndex].id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const activeLabel = SECTIONS.find(s => s.id === activeId)?.label || '';

    return (
        <>
            {/* --- BACKGROUND SYSTEM --- */}
            <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">

                {/* Layer 1: The "Very Light Blue Blur" Base
            This is always present. It's a radial gradient from Sky-50 to White.
        */}
                <div className="absolute inset-0 bg-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f0f9ff_0%,_#ffffff_70%)]"></div>
                    {/* Optional: Add a second soft blur orb for extra depth */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-sky-50 rounded-full blur-3xl opacity-50"></div>
                </div>

                {/* Layer 2: The Dark Mode Overlay
            This fades in for Hero/WhyUs/Impact to make White text readable.
        */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out ${currentMode === 'dark' ? 'opacity-90' : 'opacity-0'}`}
                />
            </div>

            {/* --- SIDE NAVIGATION UI --- */}
            <div className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6 transition-colors duration-700 ${currentMode === 'dark' ? 'text-white' : 'text-black'}`}>

                <button onClick={() => handleNav('prev')} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <ChevronUp className="w-6 h-6" />
                </button>

                <div className="relative h-24 w-8 flex items-center justify-center">
          <span key={activeLabel} className="absolute whitespace-nowrap text-xs font-bold tracking-[0.2em] uppercase rotate-[-90deg] animate-fade-in-up">
            {activeLabel}
          </span>
                </div>

                <button onClick={() => handleNav('next')} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <ChevronDown className="w-6 h-6" />
                </button>
            </div>
        </>
    );
};

export default SideNavigation;