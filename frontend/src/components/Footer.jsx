import React from 'react';
import { Facebook, Mail, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand & Newsletter */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-extrabold text-white tracking-tight">
                            Scale<span className="text-indigo-500">Up</span>.
                        </h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Empowering businesses with future-ready digital solutions. Join our newsletter for the latest updates.
                        </p>

                        {/* Newsletter Input */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            />
                            <button className="absolute right-1.5 top-1.5 bg-indigo-600 hover:bg-indigo-500 text-white p-1.5 rounded-md transition-colors">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Product</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Enterprise</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Socials (Your Info) */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Connect</h3>
                        <div className="space-y-4">

                            {/* Email */}
                            <a href="mailto:inkokhan@gmail.com" className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                    <Mail size={16} className="text-white" />
                                </div>
                                <span className="text-sm hover:text-white transition-colors">inkokhan@gmail.com</span>
                            </a>

                            {/* Facebook */}
                            <a href="https://www.facebook.com/ishaqahnaf.khan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#1877F2] transition-colors">
                                    <Facebook size={16} className="text-white" />
                                </div>
                                <span className="text-sm hover:text-white transition-colors">Follow on Facebook</span>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} ScaleUp Inc. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-xs text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;