import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // --- Messenger Integration Logic ---
    const fbPageId = "61587689924506";
    const messengerUrl = `https://m.me/${fbPageId}`;

    const handleMessengerClick = (e) => {
        e.preventDefault();

        // Deep link for Messenger App
        // iOS/Android typically use messenger://user/{id}
        const deepLink = `messenger://user/${fbPageId}`;

        // Attempt to open app
        window.location.href = deepLink;

        // Fallback to the optimized m.me link if app doesn't trigger
        setTimeout(() => {
            window.open(messengerUrl, '_blank', 'noopener,noreferrer');
        }, 500);
    };

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How quickly can we integrate this into our existing workflow?",
            answer: "Our platform is designed for zero-friction adoption. Most clients are fully operational within 48 hours. We provide dedicated onboarding specialists to ensure your data migrates seamlessly without downtime."
        },
        {
            question: "Is my data secure and compliant with regulations?",
            answer: "Absolutely. We adhere to GDPR, CCPA, and SOC-2 Type II standards. Your data is encrypted at rest and in transit using bank-grade AES-256 protocols, ensuring complete sovereignty and privacy."
        },
        {
            question: "Can we scale our plan as we grow?",
            answer: "Yes. Our infrastructure is elastic. You can upgrade your tier instantly through the dashboard as your traffic or data needs increase, ensuring you never pay for capacity you don't need."
        },
        {
            question: "Do you offer custom SLA agreements for enterprise?",
            answer: "For our Enterprise partners, we offer tailored Service Level Agreements (SLAs) including 99.99% uptime guarantees, 24/7 dedicated phone support, and assigned success managers."
        },
        {
            question: "What happens if we need a feature that isn't listed?",
            answer: "We are partner-focused. Our product roadmap is heavily influenced by client feedback. For Enterprise plans, we often co-develop custom modules to fit specific niche requirements."
        }
    ];

    return (
        <section id="faq" className="bg-slate-50 py-24 px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-6">
                        <MessageCircle size={24} className="text-indigo-600" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        Frequently Asked <span className="text-indigo-600">Questions</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                {/* Accordion Container */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`overflow-hidden rounded-2xl border transition-all duration-300
                                ${isOpen
                                    ? "bg-white border-indigo-200 shadow-lg shadow-indigo-100/50"
                                    : "bg-white border-slate-200 hover:border-indigo-300"
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                >
                                    <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-indigo-900' : 'text-slate-700'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors duration-300 
                                        ${isOpen ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-500 leading-relaxed text-sm md:text-base">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600">
                        Still have questions?{' '}
                        <button
                            onClick={handleMessengerClick}
                            className="font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-4 decoration-2 cursor-pointer transition-colors"
                        >
                            Chat with our support team
                        </button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;