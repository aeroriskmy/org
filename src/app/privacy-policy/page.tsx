'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
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
                            Privacy <span className="text-[#d4a853]">Policy</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            Review our privacy policy document below.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            className="glass p-10 rounded-2xl border border-white/5 relative overflow-hidden group text-center"
                        >
                            {/* Decorative Gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#d4a853]/10 transition-colors duration-500" />

                            <h2 className="text-2xl font-bold mb-6 text-white relative z-10">
                                Download Privacy Policy
                            </h2>

                            <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
                                Click the button below to view or download our official Privacy Policy document.
                            </p>

                            <a
                                href="/documents/privacy-policy.docx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4a853] text-[#0a0f1c] font-bold rounded-lg hover:bg-[#e8c879] transition-all relative z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                View Document
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Hidden Barrier */}
            <div className="w-full h-28 md:h-32" aria-hidden="true" />

            <Footer />
        </main>
    );
}
