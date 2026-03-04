import React, { useState, useRef } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_6qmqkxm';
const TEMPLATE_ID = 'template_gsdmk4z';
const PUBLIC_KEY = '2Ps1WxjxlV2WQEwEm';

const ContactSection = () => {
    const formRef = useRef(null);
    const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        whatsapp: '',
        business_type: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Build template params matching your EmailJS template variables
        const templateParams = {
            user_name: formData.user_name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            business_type: formData.business_type,
            message: formData.message,
            time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setFormStatus('success');
            setFormData({ user_name: '', email: '', whatsapp: '', business_type: '', message: '' });
            setTimeout(() => setFormStatus('idle'), 6000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="w-full py-32 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center bg-dark-bg/80 backdrop-blur-xl border border-gray-800 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">

                    {/* Decorative background gradients */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/30 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-teal/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

                    {/* Left Text / Info */}
                    <div className="relative z-10 flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
                        >
                            Let's Build Your Digital Presence
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-muted-gray mb-10 leading-relaxed max-w-md"
                        >
                            Fill out the form to get your free website audit and project quote.
                            We typically respond within 2-4 hours during business days.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <a href="mailto:togethertechofficial@gmail.com" className="flex items-center gap-4 text-light-muted hover:text-accent-teal transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary-blue/30 transition-colors">
                                    <Mail size={20} className="group-hover:text-accent-teal" />
                                </div>
                                <div>
                                    <p className="font-semibold font-display text-white group-hover:text-accent-teal transition-colors">Email Us</p>
                                    <p className="text-sm">togethertechofficial@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+919047549682" className="flex items-center gap-4 text-light-muted hover:text-accent-teal transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary-blue/30 transition-colors">
                                    <Phone size={20} className="group-hover:text-accent-teal" />
                                </div>
                                <div>
                                    <p className="font-semibold font-display text-white group-hover:text-accent-teal transition-colors">Call Us</p>
                                    <p className="text-sm">+91-9047549682</p>
                                </div>
                            </a>

                            <a href="https://wa.me/919047549682?text=Hi%2C%20I%20would%20like%20to%20know%20about%20the%20pricing%20and%20details" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-light-muted hover:text-success-green transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-success-green/20 transition-colors">
                                    <MessageCircle size={20} className="group-hover:text-success-green" />
                                </div>
                                <div>
                                    <p className="font-semibold font-display text-white group-hover:text-success-green transition-colors">WhatsApp Direct</p>
                                    <p className="text-sm border-b border-transparent group-hover:border-success-green/50 inline-block pb-0.5">Chat with us instantly</p>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative z-10 w-full"
                    >
                        {formStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-success-green/10 border border-success-green/30 rounded-2xl p-10 flex flex-col items-center text-center shadow-lg"
                            >
                                <div className="w-20 h-20 bg-success-green rounded-full flex items-center justify-center text-dark-bg mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                    <CheckCircle2 size={40} className="ml-1" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">Request Sent!</h3>
                                <p className="text-light-muted">
                                    Thank you for reaching out. We will analyze your requirements and get back to you via email or WhatsApp within a few hours.
                                </p>
                            </motion.div>
                        ) : formStatus === 'error' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-red-500/10 border border-red-500/30 rounded-2xl p-10 flex flex-col items-center text-center shadow-lg"
                            >
                                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                                    <AlertCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">Something went wrong</h3>
                                <p className="text-light-muted">
                                    Your message couldn't be sent. Please try again or reach us directly on WhatsApp.
                                </p>
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-400 pl-1" htmlFor="user_name">Your Name</label>
                                        <input
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            required
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="bg-dark-bg/50 border border-gray-700 rounded-xl px-4 py-3.5 text-light-text placeholder-gray-600 focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-400 pl-1" htmlFor="whatsapp">WhatsApp Number</label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            name="whatsapp"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="+91-XXXXX-XXXXX"
                                            className="bg-dark-bg/50 border border-gray-700 rounded-xl px-4 py-3.5 text-light-text placeholder-gray-600 focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400 pl-1" htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@yourbusiness.com"
                                        className="bg-dark-bg/50 border border-gray-700 rounded-xl px-4 py-3.5 text-light-text placeholder-gray-600 focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400 pl-1" htmlFor="business_type">Business Type</label>
                                    <select
                                        id="business_type"
                                        name="business_type"
                                        required
                                        value={formData.business_type}
                                        onChange={handleChange}
                                        className="bg-dark-bg/50 border border-gray-700 rounded-xl px-4 py-3.5 text-light-text focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all appearance-none"
                                    >
                                        <option value="" disabled>Select your industry</option>
                                        <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                                        <option value="Real Estate / Construction">Real Estate / Construction</option>
                                        <option value="Retail / E-commerce">Retail / E-commerce</option>
                                        <option value="Service Provider (Medical/Consulting)">Service Provider (Medical/Consulting)</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400 pl-1" htmlFor="message">Message Details</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your current website or what you're looking to build..."
                                        className="bg-dark-bg/50 border border-gray-700 rounded-xl px-4 py-3.5 text-light-text placeholder-gray-600 focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className={`w-full py-4 rounded-xl font-bold font-display text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 ${formStatus === 'submitting'
                                        ? 'bg-primary-blue/50 text-white cursor-not-allowed'
                                        : 'bg-primary-blue hover:bg-accent-teal text-white shadow-[0_0_20px_rgba(13,165,184,0.1)] hover:shadow-[0_0_25px_rgba(13,165,184,0.5)]'
                                        }`}
                                >
                                    {formStatus === 'submitting' ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            Request Free Quote
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
