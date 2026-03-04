import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Rocket } from 'lucide-react';

const HowItWorks = () => {
    const containerRef = useRef(null);

    const steps = [
        {
            icon: <Search size={32} />,
            title: "Step 1: Discovery",
            desc: "We listen to your needs and understand your business goals, target audience, and current digital presence.",
            delay: 0
        },
        {
            icon: <PenTool size={32} />,
            title: "Step 2: Design",
            desc: "We create beautiful, mobile-optimized website designs tailored to attract local customers and build trust.",
            delay: 0.2
        },
        {
            icon: <Rocket size={32} />,
            title: "Step 3: Launch",
            desc: "Your optimized site goes live. We ensure it's fast, SEO-friendly, and provide support to fuel your growth.",
            delay: 0.4
        }
    ];

    return (
        <section id="how-it-works" className="w-full py-32 px-6 relative z-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-light-muted"
                    >
                        How We Help You Grow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-200 font-body"
                    >
                        A simple, transparent 3-step process designed to get your business online quickly and effectively.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-primary-blue via-accent-teal to-primary-blue opacity-50 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: step.delay }}
                            className="relative z-10 flex flex-col items-center text-center group cursor-default"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-dark-bg border border-gray-800 flex items-center justify-center text-accent-teal mb-8 shadow-xl relative overflow-hidden transition-all duration-500 group-hover:border-accent-teal/50 group-hover:shadow-[0_0_30px_rgba(13,165,184,0.2)] group-hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4 text-light-text group-hover:text-accent-teal transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-200 font-body leading-relaxed max-w-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
