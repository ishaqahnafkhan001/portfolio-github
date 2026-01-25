import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Globe, Shield, Zap, Smartphone, CheckCircle, Activity, Lock, Wifi } from 'lucide-react';

// Added specific 'Floating Widgets' for each feature to make the image side more dynamic
const features = [
    {
        id: 0,
        title: "Global CDN Acceleration",
        description: "Our distributed network ensures your content loads instantly, no matter where your users are located.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        icon: <Globe />,
        widget: (
            <div className="flex items-center gap-3">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Wifi size={20} className="text-emerald-400" />
                </div>
                <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Latency</p>
                    <p className="text-white font-mono font-bold">12ms <span className="text-emerald-400 text-xs">(-40%)</span></p>
                </div>
            </div>
        )
    },
    {
        id: 1,
        title: "Real-Time Analytics Dashboard",
        description: "Track user behavior, conversion rates, and engagement in real-time with our intuitive visualizer.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        icon: <BarChart3 />,
        widget: (
            <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Activity size={20} className="text-blue-400" />
                </div>
                <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Active Users</p>
                    <div className="flex items-end gap-1">
                        <p className="text-white font-mono font-bold">8,420</p>
                        <span className="text-blue-400 text-[10px] mb-0.5">↑</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "Bank-Level Data Security",
        description: "AES-256 encryption and automated threat detection keep your business and customer data safe.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
        icon: <Shield />,
        widget: (
            <div className="flex items-center gap-3">
                <div className="bg-indigo-500/20 p-2 rounded-lg">
                    <Lock size={20} className="text-indigo-400" />
                </div>
                <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Encryption</p>
                    <p className="text-white font-mono font-bold">AES-256 <span className="text-indigo-400 text-xs">Active</span></p>
                </div>
            </div>
        )
    },
    {
        id: 3,
        title: "Instant API Integration",
        description: "Connect with your favorite tools in seconds. We support over 50+ third-party integrations out of the box.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
        icon: <Zap />,
        widget: (
            <div className="flex items-center gap-3">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                    <CheckCircle size={20} className="text-amber-400" />
                </div>
                <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Status</p>
                    <p className="text-white font-mono font-bold">Connected</p>
                </div>
            </div>
        )
    },
    {
        id: 4,
        title: "Mobile-First Architecture",
        description: "Every pixel is optimized for mobile devices, ensuring a flawless experience on phones and tablets.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
        icon: <Smartphone />,
        widget: (
            <div className="flex items-center gap-3">
                <div className="bg-pink-500/20 p-2 rounded-lg">
                    <Smartphone size={20} className="text-pink-400" />
                </div>
                <div>
                    <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Device</p>
                    <p className="text-white font-mono font-bold">Responsive</p>
                </div>
            </div>
        )
    }
];

const FeatureShowcase = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="bg-white py-24 px-6 relative overflow-hidden">

            {/* DECORATIVE: Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* DECORATIVE: Floating Gradient Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase">
                        Core Technology
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Hyper-Growth</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg">
                        Explore the cutting-edge infrastructure that powers the next generation of digital businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT SIDE: Interactive Accordion List */}
                    <div className="flex flex-col space-y-4 order-2 lg:order-1">
                        {features.map((feature, index) => {
                            const isActive = activeFeature === index;

                            return (
                                <motion.div
                                    key={feature.id}
                                    onClick={() => setActiveFeature(index)}
                                    initial={false}
                                    animate={{
                                        backgroundColor: isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
                                        borderColor: isActive ? "rgba(99, 102, 241, 0.2)" : "transparent",
                                        scale: isActive ? 1.02 : 1
                                    }}
                                    className={`cursor-pointer rounded-2xl p-6 border relative overflow-hidden group transition-all duration-300
                                        ${isActive ? "shadow-xl shadow-indigo-100/50 z-10" : "hover:bg-slate-50"}`}
                                >
                                    <div className="flex items-center justify-between relative z-10">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl transition-all duration-300 
                                                ${isActive
                                                ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200"
                                                : "bg-slate-100 text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50"
                                            }`}>
                                                {feature.icon}
                                            </div>
                                            <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-500"}`}>
                                                {feature.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="mt-4 text-slate-600 leading-relaxed pl-[4.25rem]">
                                                    {feature.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE: Dynamic Image Display */}
                    <div className="relative order-1 lg:order-2">
                        {/* Main Image Container */}
                        <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-[8px] border-white bg-slate-100">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeFeature}
                                    src={features[activeFeature].image}
                                    alt={features[activeFeature].title}
                                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                                    transition={{ duration: 0.6, ease: "circOut" }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Dark Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

                            {/* DYNAMIC FLOATING WIDGET */}
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeFeature}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl max-w-sm"
                                    >
                                        {features[activeFeature].widget}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decoration Elements behind Image */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;