import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
// import dotenv from 'dotenv';

const EmailForm = ({ productTitle, onBack }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const accessKey = import.meta.env.VITE_KEY

        // console.log("CRA Environment:", process.env.VITE_KEY);
        const payload = {
            access_key: accessKey , // <-- PUT YOUR KEY HERE
            subject: `New Inquiry: ${productTitle} Package`,
            from_name: formData.name,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            message: formData.message,
        };

        try {
            // 2. Send the data silently in the background
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    // Show a success message if the email was sent
    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-8"
            >
                <CheckCircle2 size={64} className="text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 mb-8">
                    Thanks for reaching out about the {productTitle} package. We'll get back to you at {formData.email} shortly.
                </p>
                <button
                    onClick={onBack}
                    className="py-3 px-6 rounded-xl text-sm font-bold shadow-md bg-slate-100 text-slate-900 hover:bg-slate-200 transition-all"
                >
                    Back to Options
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
        >
            <div className="flex items-center mb-6">
                <button onClick={onBack} className="p-2 -ml-2 text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100">
                    <ArrowLeft size={20} />
                </button>
                <h3 className="text-xl font-bold text-slate-900 ml-2">Send us an Email</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Name</label>
                    <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                        placeholder="Your name"
                        disabled={status === 'submitting'}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                    <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                        placeholder="you@example.com"
                        disabled={status === 'submitting'}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Phone Number <span className="text-slate-400 font-normal capitalize">(Optional)</span>
                    </label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                        placeholder="+880 1..."
                        disabled={status === 'submitting'}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Message</label>
                    <textarea
                        required
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                        placeholder={`I'm interested in the ${productTitle} package...`}
                        disabled={status === 'submitting'}
                    />
                </div>

                {status === 'error' && (
                    <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                )}

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex justify-center items-center py-4 px-6 mt-4 rounded-xl text-sm font-bold shadow-md bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                </button>
            </form>
        </motion.div>
    );
};

export default EmailForm;