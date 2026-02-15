import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SECTIONS = [
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
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeId]);

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
            {/* Background System - Same as before */}
            <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
                <div className="absolute inset-0 bg-white" />
                <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${currentMode === 'dark' ? 'opacity-90' : 'opacity-0'}`} />
            </div>

            {/* --- COMPACT SIDE NAVIGATION --- */}
            <nav
                className={`fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-[9999] 
                flex flex-col items-center gap-1 py-3 px-1.5 rounded-2xl
                transition-all duration-500 border
                ${currentMode === 'dark'
                    ? 'text-white bg-white/10 border-white/10'
                    : 'text-black bg-black/5 border-black/5'} 
                backdrop-blur-lg shadow-lg`}
            >
                {/* Smaller Arrows */}
                <button
                    onClick={() => handleNav('prev')}
                    className="p-1 rounded-lg hover:bg-white/20 active:scale-90 transition-all"
                >
                    <ChevronUp className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                {/* Shorter Vertical Text */}
                <div className="relative h-16 md:h-20 w-6 flex items-center justify-center">
                    <span
                        key={activeId}
                        className="absolute whitespace-nowrap text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase rotate-[-90deg] opacity-70"
                    >
                        {activeLabel}
                    </span>
                </div>

                <button
                    onClick={() => handleNav('next')}
                    className="p-1 rounded-lg hover:bg-white/20 active:scale-90 transition-all"
                >
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                </button>
            </nav>
        </>
    );
};

export default SideNavigation;