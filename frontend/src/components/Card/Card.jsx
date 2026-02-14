import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';
import ContactModal from './ContactModal'; // Importing the modal

const ProductGrid = () => {
    const [modalConfig, setModalConfig] = useState({ isOpen: false, product: null });

    const openModal = (product) => setModalConfig({ isOpen: true, product });
    const closeModal = () => setModalConfig({ isOpen: false, product: null });

    const products = [
        {
            id: 1,
            title: "Starter Identity",
            description: "Perfect for new entrepreneurs looking to make their first mark.",
            price: "12,000TK",
            originalPrice: "15,000TK",
            save: "SAVE 20%",
            popular: false,
            benefits: [
                "Primary & Secondary Logo",
                "Full Brand Color Palette",
                "Typography Selection",
                "Social Media Profile Kit",
                "Business Card Design",
                "Editable Source Files (AI/EPS)",
                "High-Res Exports (PNG/JPG)",
                "Full Commercial Rights"
            ],
            demo: "https://portfolio-github-gopv.onrender.com"
        },
        {
            id: 2,
            title: "E-Commerce Launch",
            description: "A complete single-vendor store with admin dashboard and payments.",
            price: "25,000TK",
            originalPrice: "35,000TK",
            save: "SAVE 30%",
            popular: true,
            benefits: [
                "Complete E-commerce Store",
                "Mobile-First Responsive Design",
                "Secure Payment Gateway",
                "Admin Dashboard & Analytics",
                "Real-time Order Tracking",
                "Automated Inventory Management",
                "Social Media Login (Google/FB)",
                "WhatsApp Chat Integration",
                "Abandoned Cart Recovery",
                "Advanced Sales Reporting"
            ],
            demo: "http://adijewellery.store/"
        },
        {
            id: 3,
            title: "Business Scaling",
            description: "Advanced tools for established businesses ready to dominate.",
            price: "45,000TK",
            originalPrice: "60,000TK",
            save: "SAVE 25%",
            popular: false,
            benefits: [
                "Multi-Vendor Capability",
                "Custom Mobile App (Android)",
                "Advanced SEO Package",
                "Priority 24/7 Support",
                "Cloud Server Setup",
                "Dedicated Account Manager"
            ],
            demo: "#"
        }
    ];

    return (
        <>
            <section className="relative py-24 px-4 md:px-8 bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent pointer-events-none"/>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent pointer-events-none"/>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Simple Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Powerful Results</span>
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Transparent packages designed to scale with your business. No hidden fees.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {products.map((product, index) => (
                            <div key={product.id} className={`relative group ${product.popular ? 'lg:-mt-8' : ''}`}>
                                {product.popular && (
                                    <div className="absolute -inset-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.2rem] opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-500"/>
                                )}

                                <motion.div
                                    initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.1, duration: 0.5}}
                                    className={`relative h-full bg-white rounded-[2rem] p-8 flex flex-col transition-all duration-300
                                        ${product.popular
                                        ? "shadow-2xl ring-1 ring-indigo-100"
                                        : "shadow-lg border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:-translate-y-1"
                                    }`}
                                >
                                    {product.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="bg-slate-900 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5 ring-4 ring-slate-50">
                                                <Star size={10} className="text-yellow-400 fill-yellow-400"/>
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-8 text-center border-b border-slate-100 pb-8">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 h-10">{product.description}</p>

                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-slate-400 line-through text-sm font-medium">{product.originalPrice}</span>
                                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                                    {product.save}
                                                </span>
                                            </div>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                                                    {product.price}
                                                </span>
                                                <span className="text-slate-400 text-sm font-medium">/project</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow mb-8">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                            What's Included:
                                        </p>
                                        <ul className="space-y-4">
                                            {product.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                                    <div className={`mt-0.5 p-0.5 rounded-full flex-shrink-0 
                                                        ${product.popular ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}
                                                    `}>
                                                        <Check size={14} strokeWidth={3}/>
                                                    </div>
                                                    <span className="leading-tight">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-3 mt-auto">
                                        <button
                                            onClick={() => openModal(product)}
                                            className={`w-full py-4 px-6 rounded-xl text-sm font-bold shadow-md transition-all transform duration-200 active:scale-[0.98]
                                            ${product.popular
                                                ? "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg"
                                                : "bg-white text-slate-900 border-2 border-slate-100 hover:border-slate-900 hover:bg-slate-50"
                                            }`}>
                                            Get Started
                                        </button>

                                        <button className="w-full flex justify-center items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors py-2">
                                            <a href={product.demo} target="_blank" rel="noreferrer">View Demo</a> <ArrowRight size={14}/>
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactModal
                isOpen={modalConfig.isOpen}
                onClose={closeModal}
                product={modalConfig.product}
            />
        </>
    );
};

export default ProductGrid;