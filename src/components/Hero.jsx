import React from 'react';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="w-full min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="w-full max-w-7xl flex flex-col items-center text-center">

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/20 border border-primary-blue/30 text-accent-teal text-sm font-medium mb-6 hover:bg-primary-blue/40 transition-colors duration-300 cursor-default shadow-[0_0_15px_rgba(13,165,184,0.1)] hover:shadow-[0_0_20px_rgba(13,165,184,0.3)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
                        </span>
                        Available for new projects in All Over India
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-light-muted">
                        Professional Web Development for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-blue-400">Local Businesses</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl font-body leading-relaxed text-shadow-sm">
                        Beautiful, fast, and mobile-optimized websites that turn visitors into loyal customers. Stand out in the digital landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <a href="#contact" className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-accent-teal hover:bg-teal-400 text-dark-bg px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(13,165,184,0.3)] hover:shadow-[0_0_30px_rgba(13,165,184,0.5)] hover:-translate-y-1">
                            Get Free Website Audit
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#work" className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
                            View My Work
                        </a>
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 w-full flex flex-wrap justify-center gap-6 md:gap-12 pt-8 border-t border-gray-800/50"
                >
                    <div className="flex items-center gap-3 group cursor-default">
                        <div className="w-10 h-10 rounded-full bg-primary-blue/20 flex items-center justify-center text-accent-teal transition-all duration-300 group-hover:bg-accent-teal group-hover:text-dark-bg group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(13,165,184,0.6)]">
                            <Star size={20} className="fill-current group-hover:rotate-180 transition-transform duration-700" />
                        </div>
                        <div className="flex flex-col items-start transition-transform duration-300 group-hover:translate-x-1">
                            <span className="font-bold text-lg leading-none group-hover:text-white transition-colors duration-300">5+</span>
                            <span className="text-sm text-gray-200 group-hover:text-light-muted transition-colors duration-300">Projects Done</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group cursor-default">
                        <div className="w-10 h-10 rounded-full bg-primary-blue/20 flex items-center justify-center text-success-green transition-all duration-300 group-hover:bg-success-green group-hover:text-dark-bg group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                            <ShieldCheck size={20} className="group-hover:rotate-[360deg] transition-transform duration-700" />
                        </div>
                        <div className="flex flex-col items-start transition-transform duration-300 group-hover:translate-x-1">
                            <span className="font-bold text-lg leading-none group-hover:text-white transition-colors duration-300">100%</span>
                            <span className="text-sm text-gray-200 group-hover:text-light-muted transition-colors duration-300">Satisfied Clients</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group cursor-default">
                        <div className="w-10 h-10 rounded-full bg-primary-blue/20 flex items-center justify-center text-blue-400 transition-all duration-300 group-hover:bg-blue-400 group-hover:text-dark-bg group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.6)]">
                            <Clock size={20} className="group-hover:rotate-180 transition-transform duration-700" />
                        </div>
                        <div className="flex flex-col items-start transition-transform duration-300 group-hover:translate-x-1">
                            <span className="font-bold text-lg leading-none group-hover:text-white transition-colors duration-300">30 Days</span>
                            <span className="text-sm text-gray-200 group-hover:text-light-muted transition-colors duration-300">Fast Delivery</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
