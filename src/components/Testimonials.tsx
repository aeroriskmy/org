'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
    {
        name: 'Perinsuran Brokar',
        role: '',
        company: '',
        image: null,
        quote: 'The Advanced Hull & Liability course transformed my approach to risk assessment. The practical case studies were invaluable.',
        rating: 5,
    },
    {
        name: 'Tradewinds Insurance broker',
        role: '',
        company: '',
        image: null,
        quote: 'Comprehensive, well-structured, and taught by true industry experts. This certification opened doors I never thought possible.',
        rating: 5,
    },
    {
        name: 'BIB insurance brokers',
        role: '',
        company: '',
        image: null,
        quote: 'The Insurance Masterclass is unparalleled. The insights into coverage and risks were exactly what I needed.',
        rating: 5,
    },
    {
        name: 'AFR Brokers',
        role: '',
        company: '',
        image: null,
        quote: 'Outstanding program that bridges theory with real-world application. The networking opportunities alone were worth it.',
        rating: 5,
    },
];

const partners = [
    'Boeing', 'Airbus', 'Lloyd\'s', 'Swiss Re', 'Munich Re', 'AIG', 'Allianz', 'SpaceX'
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="section relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0d1220]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/30 to-transparent" />

            <div className="container mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[#d4a853] border border-[#d4a853]/30 mb-6">
                        Testimonials
                    </span>
                    <h2 className="section-title">
                        Trusted by <span className="gradient-text">Industry Leaders</span>
                    </h2>
                    <p className="section-subtitle">
                        Hear from professionals who have transformed their careers with our programs
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className={`glass rounded-2xl p-6 cursor-pointer transition-all duration-300 ${activeIndex === index ? 'border-[#d4a853]/50 scale-[1.02]' : 'hover:border-white/20'
                                }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-[#d4a853]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a853] to-[#22d3ee] flex items-center justify-center text-white font-semibold text-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                                    {testimonial.role && <div className="text-gray-500 text-xs">{testimonial.role}</div>}
                                    {testimonial.company && <div className="text-[#d4a853] text-xs">{testimonial.company}</div>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partner Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <p className="text-gray-500 text-sm mb-8">Trusted by professionals from leading organizations</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="text-gray-600 font-semibold text-lg hover:text-[#d4a853] transition-colors duration-300 cursor-default"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
