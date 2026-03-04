import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const faqs = [
        {
            question: "How long does it take to build a website?",
            answer: "Typically, a standard 5-page business website takes about 3 to 4 weeks from discovery to launch. E-commerce or highly custom premium projects may take 6 to 8 weeks depending on complexity and features required."
        },
        {
            question: "Do I completely own the website?",
            answer: "Yes, 100%. Once the final payment is made, you own the code, the design, the domain, and all assets. We provide you with all administrator access and source codes."
        },
        {
            question: "Will the website work on mobile phones?",
            answer: "Absolutely. We employ a 'Mobile-First' design strategy. Over 70% of web traffic is mobile, so we ensure your site looks spectacular and functions perfectly on all devices (phones, tablets, and desktops)."
        },
        {
            question: "Do you provide hosting and domains?",
            answer: "Yes, we can manage the technical setup for you including premium hosting, SSL certificates, and domain registration. We typically recommend modern platforms like Vercel or AWS for unbeatable speeds."
        },
        {
            question: "What if I need changes after the website goes live?",
            answer: "Each of our packages comes with a period of free technical support (ranging from 1 to 6 months). After that, we offer affordable ongoing maintenance retainers, or we can bill hourly for specific feature updates."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0); // First one open by default

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="w-full py-32 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-light-muted"
                    >
                        Common Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-200 font-body"
                    >
                        Everything you need to know about working with us.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                ? 'bg-primary-blue/10 border-accent-teal/40 shadow-[0_4px_20px_rgba(13,165,184,0.08)]'
                                : 'bg-dark-bg/60 border-gray-800 hover:border-gray-600 hover:bg-dark-bg/80'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <h3 className={`font-display font-semibold text-lg pr-8 ${openIndex === index ? 'text-accent-teal' : 'text-light-text'}`}>
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-accent-teal text-dark-bg' : 'bg-gray-800 text-gray-200'}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-200 leading-relaxed pt-2">
                                            <div className="h-px w-full bg-gradient-to-r from-accent-teal/20 to-transparent mb-4"></div>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
