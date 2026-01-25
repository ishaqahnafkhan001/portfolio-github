import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Star } from 'lucide-react';

const products = [
    {
        id: 1,
        title: "Starter Identity",
        description: "Perfect for new entrepreneurs looking to make their first mark.",
        price: "$399",
        originalPrice: "$499",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d7?auto=format&fit=crop&q=80&w=800",
        benefits: ["Custom Logo Design", "Brand Guidelines", "Social Media Kit", "1 Revision Round"],
        popular: false
    },
    {
        id: 2,
        title: "Professional Brand",
        description: "A comprehensive package for businesses ready to scale and lead.",
        price: "$999",
        originalPrice: "$1,299",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
        benefits: ["Full Visual Identity", "Website UI Kit", "Stationery Design", "Unlimited Revisions"],
        popular: true
    },
    {
        id: 3,
        title: "Enterprise Suite",
        description: "The ultimate solution for high-growth companies needing full support.",
        price: "$2,399",
        originalPrice: "$2,999",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
        benefits: ["Everything in Pro", "Market Strategy", "SEO Optimization", "24/7 Priority Support"],
        popular: false
    }
];

const ProductGrid = () => {
    return (
        <section className="bg-gradient-to-b from-white to-slate-50 relative py-20 md:py-32 px-4 md:px-8 bg-slate-50 overflow-hidden">

            {/* CREATIVE BACKGROUND: A 'Mesh' Gradient */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-white to-white pointer-events-none" />

            {/* Animated Floating Blobs for depth */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[80px] -z-0"
            />
            <motion.div
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[80px] -z-0"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Simple Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Powerful Results</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg">Choose the perfect plan to accelerate your digital transformation.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
                    {products.map((product, index) => (
                        <div key={product.id} className={`relative group ${product.popular ? 'lg:-mt-12' : ''}`}>

                            {/* POPULAR GLOW EFFECT (Only for middle card) */}
                            {product.popular && (
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.1rem] opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
                            )}

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                                className={`relative h-full bg-white rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500
                                    ${product.popular
                                    ? "shadow-2xl shadow-indigo-200/50"
                                    : "shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2"
                                }`}
                            >
                                {/* Most Popular Badge */}
                                {product.popular && (
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                                )}

                                {product.popular && (
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                                        <span className="bg-slate-900 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                                            <Star size={10} className="text-yellow-400" fill="currentColor" />
                                            Best Value
                                        </span>
                                    </div>
                                )}

                                {/* Image Section with Zoom Effect */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-emerald-100 flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-emerald-700 text-[11px] font-bold uppercase tracking-wide">
                                            Save 20%
                                        </span>
                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay for text readability on image if needed */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-20" />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Pricing Block */}
                                    <div className="mb-8 bg-slate-50 rounded-2xl p-4 border border-slate-100 group-hover:border-indigo-50 transition-colors">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-slate-400 line-through text-sm">{product.originalPrice}</span>
                                            {product.popular && <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">SAVE $300</span>}
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className={`text-4xl font-extrabold tracking-tight ${product.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' : 'text-slate-900'}`}>
                                                {product.price}
                                            </span>
                                            <span className="text-slate-400 text-sm font-medium">/project</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3 mb-8">
                                        <button className={`w-full py-4 px-6 rounded-xl text-sm font-bold shadow-lg transition-all transform duration-200 active:scale-[0.98]
                                            ${product.popular
                                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-indigo-200 hover:brightness-110"
                                            : "bg-slate-900 text-white hover:bg-slate-800"
                                        }`}>
                                            Get Started Now
                                        </button>

                                        <button className="w-full py-3 px-6 rounded-xl text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors flex justify-center items-center gap-2 group/btn">
                                            View Full Features
                                            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </button>
                                    </div>

                                    {/* Benefits */}
                                    <div className="pt-6 border-t border-slate-100 mt-auto">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                            Everything in {product.popular ? 'Starter' : 'Package'} plus:
                                        </p>
                                        <ul className="space-y-3">
                                            {product.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start text-slate-600 text-sm group/item">
                                                    <div className={`mt-0.5 mr-3 flex-shrink-0 rounded-full p-0.5 transition-colors duration-300 
                                                        ${product.popular
                                                        ? 'bg-indigo-100 text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white'
                                                        : 'bg-slate-100 text-slate-500 group-hover/item:bg-slate-900 group-hover/item:text-white'
                                                    }`}>
                                                        <Check size={12} strokeWidth={3} />
                                                    </div>
                                                    <span className="group-hover/item:text-slate-900 transition-colors">
                                                        {benefit}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;