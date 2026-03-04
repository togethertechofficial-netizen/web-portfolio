import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
    const plans = [
        {
            name: "Starter",
            target: "For new local businesses",
            price: "₹5K - 10K",
            popular: false,
            features: [
                "Up to 3 Pages",
                "Mobile-Responsive Design",
                "Basic SEO Setup",
                "Contact Form Integration",
                "WhatsApp Click-to-Chat",
                "1 Month Free Support"
            ]
        },
        {
            name: "Professional",
            target: "For growing brands",
            price: "₹10K - 15K",
            popular: true,
            features: [
                "Up to 10 Pages",
                "Premium Custom Animations",
                "Basic On-Page SEO",
                "CMS / Blog Integration",
                "Google Analytics Setup",
                "2 Months Free Support"
            ]
        },
        {
            name: "Premium",
            target: "For established retail/sales",
            price: "15K-25K",
            popular: false,
            features: [
                " Custom Pages",
                "Full E-Commerce / Ordering",
                "Payment Gateway Integration",
                "User Accounts & Dashboards",
                "High-Performance Architecture",
                "3 Months Priority Support"
            ]
        }
    ];

    return (
        <section id="pricing" className="w-full py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-light-muted"
                    >
                        Transparent Packages
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-200 font-body"
                    >
                        No hidden costs. Choose the perfect website package for your business size and growth goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-4 ${plan.popular
                                ? 'bg-gradient-to-b from-primary-blue/40 to-dark-bg border-accent-teal/50 shadow-[0_0_30px_rgba(13,165,184,0.15)] transform md:-translate-y-4 md:hover:-translate-y-8 z-10'
                                : 'bg-dark-bg/80 backdrop-blur-sm border-gray-800'
                                } border`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-teal text-dark-bg font-bold px-4 py-1 rounded-full text-sm shadow-[0_0_15px_rgba(13,165,184,0.5)]">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-8 pt-4">
                                <h3 className="text-2xl font-display font-bold text-light-text mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-200 mb-6 h-5">{plan.target}</p>
                                <div className="text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                    {plan.price}
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-blue/30 flex items-center justify-center text-accent-teal">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-light-muted text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className={`w-full block text-center py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${plan.popular
                                    ? 'bg-accent-teal text-dark-bg hover:bg-teal-300 hover:shadow-[0_0_25px_rgba(13,165,184,0.4)]'
                                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/5 hover:border-white/20 hover:shadow-lg'
                                    }`}
                            >
                                Choose {plan.name}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
