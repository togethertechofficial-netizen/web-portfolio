import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import logoImage from '../assets/abv.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-dark-bg border-t border-gray-800 relative z-10 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6 cursor-pointer">
                            <img src={logoImage} alt="Together Tech Logo" className="h-12 w-auto object-contain" />
                            <span className="font-display font-bold text-2xl tracking-tight text-light-text">
                                Together<span className="text-accent-teal">Tech</span>
                            </span>
                        </div>
                        <p className="text-muted-gray mb-8 max-w-sm">
                            Helping local  businesses dominate their digital landscape with premium, conversion-focused web applications.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-blue hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-blue hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-blue hover:text-white transition-all">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-6 tracking-wide">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-muted-gray hover:text-accent-teal transition-colors">Web Development</a></li>
                            <li><a href="#" className="text-muted-gray hover:text-accent-teal transition-colors">E-Commerce</a></li>
                            <li><a href="#" className="text-muted-gray hover:text-accent-teal transition-colors">SEO Optimization</a></li>
                            <li><a href="#" className="text-muted-gray hover:text-accent-teal transition-colors">Website Audit</a></li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#work" className="text-muted-gray hover:text-accent-teal transition-colors">Our Work</a></li>
                            <li><a href="#pricing" className="text-muted-gray hover:text-accent-teal transition-colors">Pricing</a></li>
                            <li><a href="#contact" className="text-muted-gray hover:text-accent-teal transition-colors">Contact</a></li>
                            <li><a href="#" className="text-muted-gray hover:text-accent-teal transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} TOGETHER TECH Development. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        Built with <Heart size={14} className="text-red-500 mx-1 inline" /> in India
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
