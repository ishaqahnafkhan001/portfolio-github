import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Layers, Activity } from 'lucide-react';

const ImpactSection = () => {
    return (
        <section className="relative bg-slate-900 py-32 px-6 overflow-hidden">

            {/* BACKGROUND CREATIVE ELEMENTS */}
            {/* A massive glowing orb to create atmosphere */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: The Business Message */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6">
              <span className="text-indigo-300 font-semibold tracking-wide uppercase text-xs">
                Performance Metrics
              </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                            Scale Your Revenue, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                Not Your Overhead.
              </span>
                        </h2>

                        <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
                            Stop trading time for growth. Our platform unifies your revenue streams and automates complex data operations, allowing you to handle 10x the volume without adding a single headcount.
                        </p>

                        <div className="mt-10 space-y-6">
                            {/* Point 1: Sales/Growth */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Revenue Acceleration</h3>
                                    <p className="text-slate-400 text-sm mt-1">
                                        Convert traffic into transactions with a frictionless customer journey designed for high-volume sales.
                                    </p>
                                </div>
                            </div>

                            {/* Point 2: Data/Speed */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Operational Velocity</h3>
                                    <p className="text-slate-400 text-sm mt-1">
                                        Process millions of data points instantly. Gain real-time clarity without the operational drag.
                                    </p>
                                </div>
                            </div>

                            {/* Point 3: Hassle Free */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Streamlined Infrastructure</h3>
                                    <p className="text-slate-400 text-sm mt-1">
                                        Eliminate technical debt. We handle the complexity so you can focus purely on market expansion.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                                Start Scaling Today
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT: The Visual Metaphor (Creative Composition) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full hidden lg:block"
                    >
                        {/* Main Image: Business/Abstract Tech */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                                alt="Analytics Growth"
                                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Dark Overlay to make text pop if needed */}
                            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
                        </div>

                        {/* FLOATING CARD 1: Revenue Graph */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute top-10 -left-12 bg-slate-800/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-600 shadow-2xl w-64"
                        >
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <p className="text-slate-400 text-xs uppercase tracking-wider">Total Revenue</p>
                                    <p className="text-2xl font-bold text-white">$124,500</p>
                                </div>
                                <div className="bg-emerald-500/20 px-2 py-1 rounded text-emerald-400 text-xs font-bold">
                                    +24%
                                </div>
                            </div>
                            {/* Simple CSS Bar Chart Visualization */}
                            <div className="flex items-end gap-2 h-16 mt-4">
                                <div className="w-full bg-slate-600 rounded-t h-[40%]" />
                                <div className="w-full bg-slate-600 rounded-t h-[60%]" />
                                <div className="w-full bg-slate-600 rounded-t h-[30%]" />
                                <div className="w-full bg-indigo-500 rounded-t h-[80%] shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                                <div className="w-full bg-slate-600 rounded-t h-[50%]" />
                            </div>
                        </motion.div>

                        {/* FLOATING CARD 2: Active Users */}
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="absolute bottom-10 -right-8 bg-white p-6 rounded-2xl border border-white/20 shadow-2xl w-72"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-600 rounded-full text-white">
                                    <Activity size={20} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs uppercase font-bold">System Status</p>
                                    <p className="text-slate-900 font-bold">1.2M Requests/sec</p>
                                </div>
                            </div>
                            <div className="mt-3 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-indigo-600 h-full w-[92%]" />
                            </div>
                            <p className="text-right text-[10px] text-slate-400 mt-1">99.99% Uptime</p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;