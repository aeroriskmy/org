'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    const policySections = [
        {
            title: "1. Information We Collect",
            content: (
                <div className="space-y-6">
                    <p className="text-gray-400 leading-relaxed">
                        We may collect the following types of information:
                    </p>
                    <div className="space-y-3">
                        <h5 className="text-lg font-medium text-[#d4a853]">a. Personal Information</h5>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Organisation / Company name</li>
                            <li>Any other information you voluntarily provide through forms or enquiries</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h5 className="text-lg font-medium text-[#d4a853]">b. Non-Personal Information</h5>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>Pages visited and time spent on the website</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "2. How We Use Your Information",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        We use the collected information to:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                        <li>Respond to enquiries and provide requested services</li>
                        <li>Process registrations for courses, programmes, or events</li>
                        <li>Improve our website, services, and user experience</li>
                        <li>Send updates, newsletters, or promotional materials (with consent)</li>
                        <li>Comply with legal and regulatory requirements</li>
                    </ul>
                </div>
            )
        },
        {
            title: "3. Disclosure of Information",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        We do not sell, rent, or trade your personal data. Your information may be shared only with:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                        <li>Trusted service providers assisting in website hosting, email services, or payment processing</li>
                        <li>Regulatory or legal authorities when required by law</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-2">
                        All third parties are required to protect your data and use it only for specified purposes.
                    </p>
                </div>
            )
        },
        {
            title: "4. Data Protection and Security",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        We implement appropriate technical and organisational security measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
                    </p>
                </div>
            )
        },
        {
            title: "5. Cookies Policy",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        Our website may use cookies to:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                        <li>Enhance website functionality</li>
                        <li>Analyse website traffic and usage patterns</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-2">
                        You may choose to disable cookies through your browser settings, but some features of the website may not function properly.
                    </p>
                </div>
            )
        },
        {
            title: "6. Data Retention",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        We retain personal data only for as long as necessary to fulfil the purposes stated in this Privacy Policy or to comply with legal obligations.
                    </p>
                </div>
            )
        },
        {
            title: "7. Your Rights",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        In accordance with the Personal Data Protection Act 2010 (Malaysia), you have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
                        <li>Access your personal data</li>
                        <li>Request correction of inaccurate or incomplete data</li>
                        <li>Withdraw consent for data processing</li>
                        <li>Request deletion of your personal data (subject to legal requirements)</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed mt-2">
                        Requests can be made by contacting us using the details below.
                    </p>
                </div>
            )
        },
        {
            title: "8. Third-Party Links",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
                    </p>
                </div>
            )
        },
        {
            title: "9. Changes to This Privacy Policy",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                    </p>
                </div>
            )
        },
        {
            title: "10. Contact Us",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                        If you have any questions or concerns regarding this Privacy Policy or your personal data, please contact:
                    </p>
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                        <p className="text-white font-semibold text-lg mb-2">Aerorisk</p>
                        <p className="text-gray-400">Email: <a href="mailto:info@aerorisk.org.my" className="text-[#d4a853] hover:underline">info@aerorisk.org.my</a></p>
                        <p className="text-gray-400">Phone: <a href="tel:0182343926" className="text-[#d4a853] hover:underline">0182343926</a></p>
                    </div>
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
                            Privacy <span className="text-[#d4a853]">Policy</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-4">
                            Effective Date: 2026
                        </p>
                        <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
                            At Aerorisk.org.my, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.aerorisk.org.my or use our services.
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
                    </div>
                </div>
            </section>

            {/* Hidden Barrier */}
            <div className="w-full h-28 md:h-32" aria-hidden="true" />

            <Footer />
        </main>
    );
}
