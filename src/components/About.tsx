'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { value: 25, suffix: '+', label: 'Years of Excellence' },
    { value: 10000, suffix: '+', label: 'Professionals Trained' },
    { value: 150, suffix: '+', label: 'Corporate Partners' },
    { value: 35, suffix: '', label: 'Countries Reached' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span ref={ref} className="text-4xl sm:text-5xl font-bold text-[#d4a853]">
            {isInView ? (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {value.toLocaleString()}{suffix}
                </motion.span>
            ) : '0'}
        </span>
    );
}

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="section bg-radial relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a853]/50 to-transparent" />

            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[#d4a853] border border-[#d4a853]/30 mb-6">
                            About Us
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Shaping the Future of{' '}
                            <span className="gradient-text">Aviation Insurance</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            For over two decades, we have been at the forefront of aviation and space insurance education.
                            Our comprehensive programs are designed to equip professionals with the specialized knowledge
                            and practical skills needed to excel in this dynamic industry.
                        </p>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            From risk assessment to claims management, our expert-led courses cover every aspect
                            of aviation insurance, combining cutting-edge theory with real-world case studies from
                            the aerospace sector.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#d4a853]/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#d4a853]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <span className="text-gray-300 font-medium">Internationally Accredited</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#22d3ee]/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <span className="text-gray-300 font-medium">Industry-Expert Faculty</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="glass rounded-2xl p-6 text-center hover:border-[#d4a853]/30 transition-all duration-300"
                            >
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
