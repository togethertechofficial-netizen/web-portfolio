import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
    const cases = [
        {
            title: "Anjugam Chettinadu Restaurant",
            category: "Billing & Sales Management",
            challenge: "Manual billing process was extremely time-consuming, error-prone, and made tracking daily sales a confusing — leading to lost revenue and poor business visibility.",
            solution: "Developed an optimized Billing Software with a user-friendly UI and an intuitive Sales Dashboard — enabling instant bill generation, real-time sales tracking, and clear revenue insights.",
            result: "80% reduction in billing time. Full daily sales visibility with automated tracking.",
            image: "bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')]",
            align: "left"
        },
        {
            title: "Hyundai Polytech India",
            category: "Industrial Automation",
            challenge: "Manual record entry for item barcode verification was slow, error-prone, and caused production delays — making inventory tracking unreliable and inefficient.",
            solution: "Automated the entire process with a Barcode Scanner Data Management System — streamlining item verification, reducing human error, and delivering real-time inventory records.",
            result: "Near-zero manual errors. 60% faster item verification process across production lines.",
            image: "bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')]",
            align: "right"
        },

    ];

    return (
        <section id="work" className="w-full py-32 px-6 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-light-muted"
                    >
                        Proven Results Of
                        Our Businesses
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-muted-gray font-body"
                    >
                        Don't just take our word for it. See how we've transformed the digital presence of local brands.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-32">
                    {cases.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-150px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${project.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center justify-between group cursor-default`}
                        >
                            {/* Image Side with Parallax/Hover Effect */}
                            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl relative shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(13,165,184,0.15)] transition-shadow duration-700">
                                <div className="absolute inset-0 bg-primary-blue/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                                <div className={`w-full aspect-video lg:aspect-square ${project.image} bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110`}></div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 flex flex-col items-start bg-dark-bg/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-gray-800 shadow-xl transition-all duration-500 group-hover:border-accent-teal/30 group-hover:-translate-y-2 group-hover:bg-dark-bg/95">
                                <span className="text-accent-teal font-medium tracking-wider text-sm uppercase mb-4">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-light-text">
                                    {project.title}
                                </h3>

                                <div className="space-y-6 mb-10 w-full">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Challenge</h4>
                                        <p className="text-muted-gray">{project.challenge}</p>
                                    </div>
                                    <div className="h-px w-full bg-gray-800"></div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Solution</h4>
                                        <p className="text-light-muted">{project.solution}</p>
                                    </div>
                                </div>

                                <div className="bg-primary-blue/10 border border-primary-blue/30 rounded-xl p-6 w-full mb-8 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-success-green"></div>
                                    <h4 className="text-sm font-semibold text-success-green uppercase tracking-wider mb-2">The Result</h4>
                                    <p className="font-medium text-lg text-white">{project.result}</p>
                                </div>

                                <a href="#contact" className="inline-flex items-center gap-2 text-white font-semibold group/btn hover:text-accent-teal transition-colors">
                                    Get Similar Results
                                    <ArrowRight size={18} className="transform transition-transform group-hover/btn:translate-x-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
