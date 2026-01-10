'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1c]" />

            {/* Animated Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a853]/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[150px]" />

            {/* Floating Plane Silhouette */}
            <motion.div
                animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 right-1/4 opacity-10"
            >
                <svg className="w-48 h-48 text-[#d4a853]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
            </motion.div>

            {/* Content */}
            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-[#d4a853] border border-[#d4a853]/30">
                        <span className="w-2 h-2 bg-[#d4a853] rounded-full animate-pulse" />
                        Industry-Leading Aviation Insurance Education
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                    Master the Art of
                    <br />
                    <span className="gradient-text">Aviation & Space</span>
                    <br />
                    Insurance
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    Elevate your expertise with world-class training programs.
                    Join the elite professionals protecting the future of aerospace.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#courses" className="btn-primary">
                        Explore Programs
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="#about" className="btn-secondary">
                        Learn More
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8"
                >
                    {[
                        { number: '25+', label: 'Years Experience' },
                        { number: '10K+', label: 'Professionals Trained' },
                        { number: '50+', label: 'Partner Airlines' },
                        { number: '98%', label: 'Success Rate' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-[#d4a853]">{stat.number}</div>
                            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-[#d4a853] rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
