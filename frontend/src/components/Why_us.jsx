import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Trophy } from 'lucide-react';

const benefits = [
    {
        icon: <Zap size={20} />,
        title: "Lightning Fast Delivery",
        desc: "We don't just build fast websites; we deliver them ahead of schedule."
    },
    {
        icon: <ShieldCheck size={20} />,
        title: "Enterprise-Grade Security",
        desc: "Your data is protected by industry-standard encryption and best practices."
    },
    {
        icon: <Users size={20} />,
        title: "Customer-Centric Approach",
        desc: "We don't build for us. We build exactly what your audience needs."
    }
];

const WhyUsSection = () => {
    return (
        <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE: Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                                alt="Team collaborating"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Gradient for text readability if needed, though clean is better */}
                            <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
                        </div>

                        {/* Floating 'Stat' Card - Adds Depth */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs z-10 hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                                    <Trophy size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">98%</p>
                                    <p className="text-sm text-slate-500 font-medium">Client Satisfaction Rate</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Dot Pattern behind image */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-100 rounded-full mix-blend-multiply filter blur-2xl -z-10 opacity-70 animate-pulse" />
                    </motion.div>


                    {/* RIGHT SIDE: Text Content */}
                    <div className="relative">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-indigo-600 font-bold tracking-widest uppercase text-sm"
                        >
                            Why Choose Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                        >
                            We Build Digital Products That <span className="text-indigo-600">Actually Work.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-lg text-slate-600 leading-relaxed"
                        >
                            In a crowded market, good design isn't enough. We combine data-driven strategy with world-class aesthetics to ensure your brand stands out and converts visitors into loyal customers.
                        </motion.p>

                        {/* Feature List */}
                        <div className="mt-10 space-y-8">
                            {benefits.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-slate-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Optional CTA Link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="mt-12"
                        >
                            <a href="#" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
                                Learn more about our process
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;