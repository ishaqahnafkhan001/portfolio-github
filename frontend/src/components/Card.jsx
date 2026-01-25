import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';

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
        <section className="  py-22 px-12 relative overflow-hidden">

            {/* Background decoration (optional subtle shapes) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl -z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative bg-white rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500
                ${product.popular
                                ? "lg:-mt-12 lg:mb-12 shadow-indigo-200/50 shadow-2xl ring-2 ring-indigo-600 z-20"
                                : "shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 z-10"
                            }`}
                        >
                            {/* Most Popular Badge */}
                            {product.popular && (
                                <div className="absolute top-0 left-0 w-full bg-indigo-600 text-white text-xs font-bold py-2 text-center tracking-widest uppercase flex justify-center items-center gap-2">
                                    <Zap size={14} fill="currentColor" /> Most Popular Choice
                                </div>
                            )}

                            {/* Image Header with Offer Badge */}
                            <div className={`relative h-48 overflow-hidden ${product.popular ? 'mt-8' : ''}`}>
                                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-100 shadow-sm">
                   <span className="text-emerald-600 text-[10px] font-extrabold tracking-tight uppercase">
                     Save 20%
                   </span>
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                                    <p className="mt-2 text-slate-500 text-sm leading-relaxed min-h-[40px]">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <span className="text-slate-400 line-through text-sm font-medium">{product.originalPrice}</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{product.price}</span>
                                        <span className="text-slate-400 text-sm font-medium">/project</span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="space-y-3 mb-8">
                                    <button className="w-full py-3 px-4 rounded-xl text-sm font-bold text-slate-600 border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-colors flex justify-center items-center group">
                                        View Demo
                                        <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </button>

                                    <button className={`w-full py-3 px-4 rounded-xl text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]
                    ${product.popular
                                        ? "bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-indigo-200"
                                        : "bg-slate-900 hover:bg-slate-800"
                                    }`}>
                                        Choose Plan
                                    </button>
                                </div>

                                {/* Benefits List */}
                                <div className="pt-6 border-t border-slate-100 mt-auto">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                        Includes:
                                    </p>
                                    <ul className="space-y-3">
                                        {product.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start text-slate-600 text-sm">
                                                <div className={`mt-0.5 mr-3 flex-shrink-0 rounded-full p-0.5 ${product.popular ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;