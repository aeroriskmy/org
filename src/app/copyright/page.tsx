'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Copyright() {
    const copyrightSections = [
        {
            title: "1. Copyright Ownership",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        [Copyright Ownership Content Goes Here]
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        All content on this website, including text, graphics, logos, and software, is the property of Aviation Insurance Education or its content suppliers and is protected by international copyright laws.
                    </p>
                </div>
            )
        },
        {
            title: "2. Usage Rights",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        [Details about usage rights]
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                        <li>You may view, download, and print pages for personal, non-commercial use.</li>
                        <li>You must not republish material from this website without prior written consent.</li>
                    </ul>
                </div>
            )
        },
        // Add more sections as needed
    ];

    return (
        <main className="min-h-screen bg-[#070b14] text-white">
            <Navbar />

            {/* Hidden Barrier */}
            <div className="w-full h-28 md:h-32" aria-hidden="true" />

            {/* Header */}
            <section className="relative pt-10 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/30 to-transparent" />
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4a853]/10 rounded-full blur-[120px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-outfit">
                            Copyright <span className="text-[#d4a853]">Information</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            Intellectual property rights and usage policy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        {copyrightSections.map((section, index) => (
                            <div key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden group"
                                >
                                    {/* Decorative Gradient */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#d4a853]/10 transition-colors duration-500" />

                                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#d4a853] font-outfit relative z-10">
                                        {section.title}
                                    </h2>
                                    <div className="relative z-10">
                                        {section.content}
                                    </div>
                                </motion.div>

                                {/* Hidden Barrier between cards */}
                                {index < copyrightSections.length - 1 && (
                                    <div className="w-full h-14 md:h-16" aria-hidden="true" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hidden Barrier */}
            <div className="w-full h-28 md:h-32" aria-hidden="true" />

            <Footer />
        </main>
    );
}
