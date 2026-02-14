import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle, Facebook } from 'lucide-react';
import EmailForm from './EmailForm'; // Importing the child component

const ContactModal = ({ isOpen, onClose, product }) => {
    const [view, setView] = useState('options'); // 'options' | 'email'

    // Reset view when modal closes or opens
    useEffect(() => {
        if (isOpen) setView('options');
    }, [isOpen]);

    if (!isOpen) return null;

    // Placeholder links - replace with your actual WhatsApp number and FB Page URL
    const whatsappLink = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hi! I'm interested in the ${product?.title} package.`;
    const fbPageLink = "https://www.facebook.com/profile.php?id=61587689924506";

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-8">
                        {view === 'options' ? (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <div className="text-center mb-8 mt-2">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's Talk!</h3>
                                    <p className="text-slate-500 text-sm">
                                        How would you like to proceed with the <span className="font-bold text-indigo-600">{product?.title}</span> plan?
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => setView('email')}
                                        className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-all group"
                                    >
                                        <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 group-hover:scale-110 transition-transform">
                                            <Mail size={24} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-slate-900">Send an Email</p>
                                            <p className="text-xs text-slate-500">Fill out a quick form</p>
                                        </div>
                                    </button>

                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-green-100 hover:bg-green-50/50 transition-all group"
                                    >
                                        <div className="bg-green-100 p-3 rounded-lg text-green-600 group-hover:scale-110 transition-transform">
                                            <MessageCircle size={24} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-slate-900">WhatsApp</p>
                                            <p className="text-xs text-slate-500">Fastest response</p>
                                        </div>
                                    </a>

                                    <a
                                        href={fbPageLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all group"
                                    >
                                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                                            <Facebook size={24} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-slate-900">Facebook Page</p>
                                            <p className="text-xs text-slate-500">Message us on Messenger</p>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        ) : (
                            <EmailForm
                                productTitle={product?.title}
                                onBack={() => setView('options')}
                            />
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ContactModal;