import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Facebook, Phone } from 'lucide-react'; // 'Phone' often used for WhatsApp generic, or use a custom SVG

const socialLinks = [
    {
        id: 1,
        name: "Email Us",
        icon: <Mail size={20} />,
        url: "mailto:inkokhan@gmail.com",
        color: "bg-red-500", // Gmail Red
        delay: 0.1
    },
    {
        id: 2,
        name: "Facebook",
        icon: <Facebook size={20} />,
        url: "https://www.facebook.com/ishaqahnaf.khan",
        color: "bg-blue-600", // FB Blue
        delay: 0.2
    },
    {
        id: 3,
        name: "WhatsApp",
        // Standard WhatsApp Green
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            </svg>
        ),
        url: "https://wa.me/1234567890", // REPLACE with your actual number
        color: "bg-green-500",
        delay: 0.3
    }
];

const FloatingContact = () => {
    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
            {socialLinks.map((link) => (
                <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: link.delay,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    className={`relative group flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg shadow-black/20 transition-all ${link.color}`}
                >
                    {/* Icon */}
                    {link.icon}

                    {/* Tooltip (Appears on Hover) */}
                    <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {link.name}
                        {/* Tiny arrow pointing to the button */}
                        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
          </span>
                </motion.a>
            ))}
        </div>
    );
};

export default FloatingContact;