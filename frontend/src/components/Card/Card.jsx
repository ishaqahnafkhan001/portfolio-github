import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Star, ExternalLink, Loader2 } from 'lucide-react';
import ContactModal from './ContactModal';



// --- New Demo Modal Component ---
const DemoNoticeModal = ({ isOpen, onClose, demoUrl }) => {
    const [countdown, setCountdown] = useState(5);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let timer;
        if (isOpen) {
            setCountdown(5);
            setIsReady(false);
            timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setIsReady(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isOpen]);

    // Direct redirection function triggered by user click
    const handleManualRedirect = () => {
        window.open(demoUrl, '_blank', 'noopener,noreferrer');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl text-center border border-slate-100"
                    >
                        <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <Star size={40} className="fill-indigo-600" />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Demo Preview</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            This is a <span className="font-bold text-slate-900">demonstration view</span>.
                            Your final product will be fully customized based on your preferences and brand identity.
                        </p>

                        <div className="space-y-4">
                            {/* The button is now the primary way to redirect to avoid popup blockers */}
                            <button
                                onClick={handleManualRedirect}
                                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3
                                    ${isReady
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
                                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                                }`}
                            >
                                {isReady ? (
                                    <>View Demo Now <ArrowRight size={18}/></>
                                ) : (
                                    <>Redirecting in {countdown}s...</>
                                )}
                            </button>

                            <button
                                onClick={onClose}
                                className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                Cancel and Go Back
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
// --- Main Component ---
const ProductGrid = () => {
    const [modalConfig, setModalConfig] = useState({ isOpen: false, product: null });
    // New state for Demo Modal
    const [demoConfig, setDemoConfig] = useState({ isOpen: false, url: '' });

    const openModal = (product) => setModalConfig({ isOpen: true, product });
    const closeModal = () => setModalConfig({ isOpen: false, product: null });

    // Handle Demo Click
    const handleDemoClick = (e, url) => {
        e.preventDefault();
        setDemoConfig({ isOpen: true, url });
    };

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
            extra:"Starter Identity",
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
            extra:"E-Commerce Launch Plus",
            benefits: [
                "Multi-Vendor Capability",
                "Custom Mobile App (Android)",
                "Advanced SEO Package",
                "Priority 24/7 Support",
                "Cloud Server Setup",
                "Dedicated Account Manager"
            ],
            demo: "https://demo01.scaleup.codes/"
        }
    ];

    return (
        <>
            <section className="relative py-24 px-4 md:px-8 bg-slate-50 overflow-hidden">
                {/* Background Gradients - Unchanged */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent pointer-events-none"/>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent pointer-events-none"/>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Simple Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Powerful Results</span>
                        </h2>
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
                                        ${product.popular ? "shadow-2xl ring-1 ring-indigo-100" : "shadow-lg border border-slate-100 hover:border-indigo-100"}
                                    `}
                                >
                                    {/* Pricing Info - Unchanged */}
                                    <div className="mb-8 text-center border-b border-slate-100 pb-8">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-slate-400 line-through text-sm font-medium">{product.originalPrice}</span>
                                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">{product.save}</span>
                                            </div>
                                            <span className="text-4xl font-extrabold text-slate-900">{product.price}</span>
                                        </div>
                                    </div>

                                    {/* Benefits List - Unchanged */}
                                    <div className="flex-grow mb-8">
                                        {/* --- Added Extra Message Section --- */}
                                        {product.extra && (
                                            <div className="mb-6 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100/50 flex items-center gap-2">
                                                <div className="bg-indigo-600 rounded-lg p-1">
                                                    <Check size={12} className="text-white" strokeWidth={4} />
                                                </div>
                                                <p className="text-xs font-bold text-indigo-900">
                                                    Everything in <span className="underline decoration-indigo-300 underline-offset-2">{product.extra}</span> +
                                                </p>
                                            </div>
                                        )}
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                            What's Included:
                                        </p>
                                        <ul className="space-y-4">
                                            {product.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                                    <div className={`mt-0.5 p-0.5 rounded-full ${product.popular ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                                                        <Check size={14} strokeWidth={3}/>
                                                    </div>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-3 mt-auto">
                                        <button onClick={() => openModal(product)} className={`w-full py-4 px-6 rounded-xl text-sm font-bold ${product.popular ? "bg-slate-900 text-white" : "bg-white text-slate-900 border-2 border-slate-100 hover:border-slate-900"}`}>
                                            Get Started
                                        </button>

                                        {/* Updated View Demo Button */}
                                        <button
                                            onClick={(e) => handleDemoClick(e, product.demo)}
                                            className="w-full flex justify-center items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors py-2"
                                        >
                                            View Demo <ArrowRight size={14}/>
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    {/* --- Added Enterprise CTA Section --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 max-w-4xl mx-auto"
                    >
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 md:p-12 shadow-2xl">
                            {/* Subtle Background Decoration */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                        Need a more robust or <span className="text-indigo-400">Enterprise solution?</span>
                                    </h3>
                                    <p className="text-slate-400 text-lg max-w-xl">
                                        For large-scale platforms, custom integrations, or complex architectures, our team is ready to build your vision.
                                    </p>
                                </div>

                                <button
                                    onClick={() => openModal({ title: "Enterprise Solution", price: "Custom" })}
                                    className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300 shrink-0 shadow-xl"
                                >
                                    Contact Us
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ContactModal
                isOpen={modalConfig.isOpen}
                onClose={closeModal}
                product={modalConfig.product}
            />

            {/* New Demo Notice Modal */}
            <DemoNoticeModal
                isOpen={demoConfig.isOpen}
                onClose={() => setDemoConfig({ ...demoConfig, isOpen: false })}
                demoUrl={demoConfig.url}
            />
        </>
    );
};

export default ProductGrid;