import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const HeroSection = () => {
    // Animation for the "Floating" effect
    const floatAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section className="relative w-full h-screen bg-black overflow-hidden font-sans flex flex-col items-center justify-center">

            {/* --- 3D BACKGROUND: STARS --- */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    {/* radius: Size of the galaxy
                depth: How "deep" the stars go
                count: Number of stars (5000 is dense)
                factor: Size of stars
                saturation: 0 = white stars
                fade: Fades stars at the edges
                speed: Rotation speed
            */}
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </div>

            {/* --- Main Foreground Content --- */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pb-20 pointer-events-none">

                {/* 1. Floating Gradient Headline */}
                <motion.h1
                    className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-800 drop-shadow-2xl"
                    animate={floatAnimation}
                    style={{
                        // Subtle white outline to ensure legibility against stars
                        WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                    }}
                >
                    Turn Your Business Into <br/> a Brand Online
                </motion.h1>

                {/* 2. Subtitle */}
                <motion.p
                    className="mt-8 text-xl md:text-2xl text-neutral-400 max-w-2xl font-light tracking-wide"
                    animate={floatAnimation}
                    transition={{ ...floatAnimation.transition, delay: 0.2 }}
                >
                    Get a Website That Sells for You 24/7.
                </motion.p>

                {/* 3. Button (Pointer events auto to make it clickable) */}
                <motion.div
                    className="mt-12 pointer-events-auto"
                    animate={floatAnimation}
                    transition={{ ...floatAnimation.transition, delay: 0.4 }}
                >
                    <button className="group relative px-10 py-4 bg-white text-black rounded-full text-sm font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]">
                        Start Engine
                    </button>
                </motion.div>

            </div>

            {/*<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />*/}

        </section>
    );
};

export default HeroSection;