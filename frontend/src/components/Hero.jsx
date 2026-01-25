import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        title: "Innovate Your Digital Presence",
        subtitle: "Modern solutions for forward-thinking brands.",
        bg: "bg-white"
    },
    {
        id: 2,
        title: "Design Meets Functionality",
        subtitle: "Aesthetic interfaces built for seamless performance.",
        bg: "bg-slate-50"
    },
    {
        id: 3,
        title: "Future-Ready Architecture",
        subtitle: "Scalable systems built with the latest MERN technologies.",
        bg: "bg-white"
    }
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[90vh] w-full overflow-hidden font-sans">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={`absolute inset-0 flex flex-col justify-center px-8 md:px-20 ${slides[current].bg}`}
                >
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-indigo-600 font-semibold tracking-widest uppercase text-sm"
                        >
                            Discover Excellence
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-4 text-5xl md:text-7xl font-bold text-slate-900 leading-tight"
                        >
                            {slides[current].title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl"
                        >
                            {slides[current].subtitle}
                        </motion.p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-8 md:left-20 flex space-x-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 transition-all duration-500 rounded-full ${
                            current === index ? "w-8 bg-indigo-600" : "w-4 bg-slate-300"
                        }`}
                    />
                ))}
            </div>

            {/* Aesthetic Floating Action Button */}
            <div className="absolute bottom-10 right-8 md:right-20">
                <button className="group relative flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 active:scale-95">
                    <span>Get Started</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;