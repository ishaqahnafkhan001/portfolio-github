import React from 'react';
import { motion } from 'framer-motion';

const HookSection = () => {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-10 md:py-32 px-6 ">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900"
                >
                    Turn Your Business Into a <span className="text-indigo-600">Brand</span> This New Year
                </motion.h2>

                {/* Optional: A very subtle decorative line below the text */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8 h-1 w-24 bg-indigo-100 mx-auto rounded-full"
                />
            </div>
        </section>
    );
};

export default HookSection;