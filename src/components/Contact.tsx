'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formsubmit.co/ajax/register@aerorisk.org.my", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setFormStatus('sent');
                (e.target as HTMLFormElement).reset();
            } else {
                console.error("Form submission failed");
                setFormStatus('idle'); // Allow retry
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error", error);
            setFormStatus('idle');
            alert("Something went wrong. Please check your connection.");
        }
    };

    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-radial" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/30 to-transparent" />

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#d4a853]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-[120px]" />

            <div className="container mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[#d4a853] border border-[#d4a853]/30 mb-6">
                        Contact Us
                    </span>
                    <h2 className="section-title">
                        Start Your <span className="gradient-text">Journey</span> Today
                    </h2>
                    <p className="section-subtitle">
                        Ready to elevate your career? Get in touch with our admissions team
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass rounded-2xl p-8"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <input type="hidden" name="_subject" value="New Contact Form Submission" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#d4a853]/50 focus:outline-none transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#d4a853]/50 focus:outline-none transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#d4a853]/50 focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#d4a853]/50 focus:outline-none transition-colors"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Interested Program</label>
                                <select
                                    name="program"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#d4a853]/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                                >
                                    <option value="" className="bg-[#1a1f35]">Select a program</option>
                                    <option value="airports-airlines-liability" className="bg-[#1a1f35]">Airports and Airlines operations liability insurance underwriting workshop (1.5 days)</option>
                                    <option value="surveyors-adjusters-claims" className="bg-[#1a1f35]">Aviation Insurance: The role of Surveyors/Adjusters in Processing Claims (1 day)</option>
                                    <option value="reinsurance-workshop" className="bg-[#1a1f35]">Aviation reinsurance workshop (4 hours)</option>
                                    <option value="drone-insurance" className="bg-[#1a1f35]">Drone insurance underwriting workshop (4 hours)</option>
                                    <option value="mro-operations" className="bg-[#1a1f35]">Risks and Liabilities in MRO operations: From an insurance perspective (1 day)</option>
                                    <option value="law-claims" className="bg-[#1a1f35]">Aviation Insurance: Understanding law and Claims (1 day)</option>
                                    <option value="air-cargo-logistics" className="bg-[#1a1f35]">Air Cargo Logistics Operations: Understanding Risks and Liabilities (2 days)</option>
                                    <option value="ground-handling" className="bg-[#1a1f35]">Airport ground handling operations: Understanding risks and liabilities (2 days)</option>
                                    <option value="intermediate-programme" className="bg-[#1a1f35]">Aerorisk Intermediate Programme in Aviation Insurance Practice (4 months)</option>
                                    <option value="advanced-programme" className="bg-[#1a1f35]">Aerorisk Advanced Programme in Aviation Insurance Practice (5 months)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#d4a853]/50 focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us about your background and goals..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus !== 'idle'}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'idle' && 'Send Message'}
                                {formStatus === 'sending' && 'Sending...'}
                                {formStatus === 'sent' && '✓ Message Sent!'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#d4a853]/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#d4a853]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">Headquarters</div>
                                        <div className="text-gray-400 text-sm">Malaysia</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">Email</div>
                                        <div className="text-gray-400 text-sm">info@aerorisk.org.my</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">Mobile / Whatsapp</div>
                                        <div className="text-gray-400 text-sm">018 - 2343926</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Monday - Friday</span>
                                    <span className="text-white">9:00 AM - 6:00 PM GMT</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Saturday</span>
                                    <span className="text-white">10:00 AM - 2:00 PM GMT</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="text-gray-500">Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100064746020159"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#d4a853] hover:bg-[#d4a853]/10 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/aerorisk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#d4a853] hover:bg-[#d4a853]/10 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://x.com/aerorisk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#d4a853] hover:bg-[#d4a853]/10 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="mt-6 border-t border-white/10 pt-6">
                                <div className="relative w-24 h-24">
                                    <Image
                                        src="/hrd_corp.jpg"
                                        alt="HRD Corp Claimable"
                                        fill
                                        className="object-contain rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
