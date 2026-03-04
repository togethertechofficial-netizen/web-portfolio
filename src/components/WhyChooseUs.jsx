import React from 'react';
import { MapPin, Clock, HeartHandshake, Zap, MonitorSmartphone, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <MapPin size={24} />,
            title: "Serving All Over India",
            desc: "From Chennai to Mumbai, Delhi to Bengaluru — we deliver high-quality digital solutions remotely for businesses across India with zero compromise on quality."
        },
        {
            icon: <Clock size={24} />,
            title: "Fast Turnaround",
            desc: "Stop waiting months. Get your premium, fully functional website launched within 3 to 4 weeks."
        },
        {
            icon: <HeartHandshake size={24} />,
            title: "24/7 Dedicated Support",
            desc: "We don't just build and disappear. You get continuous maintenance, backups, and emergency support."
        },
        {
            icon: <Zap size={24} />,
            title: "Lightning Fast Speeds",
            desc: "Built with the latest React & Vite tech stack, ensuring Google loves your site and users don't bounce."
        },
        {
            icon: <MonitorSmartphone size={24} />,
            title: "Mobile-First approach",
            desc: "70% of local searches are on phones. Every design is perfected for mobile screens before desktop."
        },
        {
            icon: <Trophy size={24} />,
            title: "Proven Results",
            desc: "Our designs are optimized for conversions, turning your website into a 24/7 automated sales machine."
        }
    ];

    return (
        <section className="w-full py-32 px-6 relative z-10 bg-dark-bg/40 backdrop-blur-sm border-y border-gray-800/60">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-light-muted"
                    >
                        Why Choose Us?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-200 font-body font-medium"
                    >
                        We combine high-end development with a personalized, local touch.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-dark-bg/80 border border-gray-800 p-8 rounded-2xl hover:bg-gray-800/60 hover:border-accent-teal/50 transition-all duration-300 transform hover:-translate-y-2 group cursor-default shadow-lg hover:shadow-[0_0_20px_rgba(13,165,184,0.15)]"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary-blue/20 flex items-center justify-center text-accent-teal mb-6 group-hover:scale-110 group-hover:bg-accent-teal group-hover:text-dark-bg transition-all duration-300 shadow-[0_0_15px_rgba(13,165,184,0.1)] group-hover:shadow-[0_0_20px_rgba(13,165,184,0.4)]">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide">{reason.title}</h3>
                            <p className="text-gray-200 leading-relaxed text-sm">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
