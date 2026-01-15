'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Copyright() {
    const policySections = [
        {
            title: "1. Ownership of Content",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        All content published on this website and within Aerorisk programmes, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                        <li>Text, articles, and written materials</li>
                        <li>Course syllabi, training manuals, presentations, slides, and assessments</li>
                        <li>Proprietary frameworks, methodologies, and learning outcomes</li>
                        <li>Logos, branding, graphics, videos, and downloadable resources</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-2">
                        are the intellectual property of Aerorisk, unless otherwise stated.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        This content is protected under the Copyright Act 1987 (Malaysia) and applicable international intellectual property laws.
                    </p>
                </div>
            )
        },
        {
            title: "2. Proprietary Programmes",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        All rights, titles, and interests in the programmes remain exclusively with Aerorisk.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        No licence or ownership rights are transferred to users, students, partners, or institutions unless expressly agreed in writing.
                    </p>
                </div>
            )
        },
        {
            title: "3. Permitted Use",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        Users may:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                        <li>View and access content for personal, educational, or non-commercial use</li>
                        <li>Download materials only where explicitly permitted</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-2">
                        Any use must retain all copyright and proprietary notices.
                    </p>
                </div>
            )
        },
        {
            title: "4. Prohibited Use",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        Without prior written consent from Aerorisk, users may not:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                        <li>Reproduce, copy, or redistribute content in whole or in part</li>
                        <li>Modify, adapt, translate, or create derivative works</li>
                        <li>Sell, sublicense, or commercially exploit any content</li>
                        <li>Upload or share materials on public platforms, learning management systems, or third-party websites</li>
                        <li>Use Aerorisk content for training delivery, teaching, or certification purposes</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-2 font-semibold text-red-400">
                        Unauthorized use may result in legal action.
                    </p>
                </div>
            )
        },
        {
            title: "5. Trademarks",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        “Aerorisk”, the Aerorisk logo, and all related programme names are trademarks or proprietary identifiers of Aerorisk.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Unauthorized use of Aerorisk branding is strictly prohibited.
                    </p>
                </div>
            )
        },
        {
            title: "6. Enforcement",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        Aerorisk reserves the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                        <li>Monitor use of its content</li>
                        <li>Restrict access to materials</li>
                        <li>Take legal action against copyright infringement, misuse, or unauthorised distribution</li>
                    </ul>
                </div>
            )
        },
        {
            title: "7. Requests for Permission",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        Requests to reproduce, license, collaborate, or use Aerorisk content for academic, institutional, or commercial purposes must be made in writing.
                    </p>
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-4">
                        <p className="text-gray-400">Please contact: <a href="mailto:info@aerorisk.org.my" className="text-[#d4a853] hover:underline">info@aerorisk.org.my</a></p>
                    </div>
                </div>
            )
        },
        {
            title: "8. Changes to This Policy",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        Aerorisk may update this policy at any time. Continued use of the website or materials constitutes acceptance of the revised policy.
                    </p>
                </div>
            )
        }
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
                            Copyright & Intellectual <span className="text-[#d4a853]">Property Policy</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            Last updated: 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {policySections.map((section, index) => (
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
                                {index < policySections.length - 1 && (
                                    <div className="w-full h-14 md:h-16" aria-hidden="true" />
                                )}
                            </div>
                        ))}

                        {/* Bottom Copyright Note */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mt-16 text-gray-500"
                        >
                            © 2026 AeroRisk. All Rights Reserved.
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
