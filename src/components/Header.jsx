import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/abv.png';
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'Work', 'Pricing', 'Contact'];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full flex justify-center ${isScrolled ? 'bg-transparent backdrop-blur-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl w-full px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <img src={logoImage} alt="Together Tech" className="h-20 w-20 object-contain transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_15px_rgba(13,165,184,0.6)]" />
                    <span className="font-display font-bold text-2xl tracking-tight text-light-text hidden sm:block transition-colors duration-300 group-hover:text-white">
                        Together<span className="text-accent-teal transition-colors duration-300 group-hover:text-teal-300">Tech</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="relative text-sm font-medium text-light-muted hover:text-white transition-colors duration-300 group"
                        >
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-teal transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                    ))}
                    <a href="#contact" className="bg-primary-blue hover:bg-accent-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(13,165,184,0)] hover:shadow-[0_0_20px_rgba(13,165,184,0.6)] transform hover:-translate-y-1">
                        Get Free Audit
                    </a>
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-light-text hover:text-accent-teal transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-dark-bg/95 backdrop-blur-xl border-t border-gray-800 p-6 flex flex-col gap-6 items-center shadow-xl md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-lg font-medium text-light-muted hover:text-accent-teal transition-colors w-full text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-primary-blue w-full text-center hover:bg-accent-teal text-white px-5 py-3 rounded-xl text-md font-semibold transition-all"
                    >
                        Get Free Audit
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
