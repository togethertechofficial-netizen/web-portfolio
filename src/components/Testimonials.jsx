import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Saravanan R.",
            role: "Owner, Anjugam Chettinadu Restaurant",
            text: "Before this software, billing used to take forever and we kept making mistakes. Now our staff generates bills in seconds and I can see the full day's sales from my phone. It completely transformed how we run the restaurant.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=murugan"
        },
        {
            id: 2,
            name: "Balaji S.",
            role: "Production Manager, Hyundai Polytech India",
            text: "Manual barcode entries were causing verification delays on the production floor. The automated scanner system they built eliminated human errors entirely. Our item verification is now 60% faster and fully traceable in real time.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=karthik"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="w-full py-32 px-6 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent-teal"
                    >
                        <Quote size={28} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
                    >
                        Loved by Local Founders
                    </motion.h2>
                </div>

                <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -100, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="w-full flex flex-col items-center text-center px-12 md:px-16 py-10 bg-dark-bg/60 backdrop-blur-md rounded-3xl border border-gray-800 shadow-[0_0_20px_rgba(31,78,120,0.15)] hover:shadow-[0_0_30px_rgba(13,165,184,0.3)] hover:border-accent-teal/50 transition-all duration-500 group cursor-default"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} size={20} className="fill-accent-teal text-accent-teal" />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl font-display italic text-light-muted mb-8 leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div className="flex flex-col items-center gap-1 mt-auto">
                                <h4 className="font-bold text-white font-display text-lg tracking-wide">{testimonials[currentIndex].name}</h4>
                                <span className="text-sm text-accent-teal font-medium">{testimonials[currentIndex].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-bg/80 border border-gray-700 flex items-center justify-center text-white hover:bg-primary-blue hover:text-white transition-colors z-20 shadow-lg"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark-bg/80 border border-gray-700 flex items-center justify-center text-white hover:bg-primary-blue hover:text-white transition-colors z-20 shadow-lg"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-accent-teal' : 'w-2 bg-gray-600 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
