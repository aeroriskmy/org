'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const footerLinks = {
    Programs: [
        { name: 'Aviation Fundamentals', href: '#' },
        { name: 'Hull & Liability', href: '#' },
        { name: 'Space Insurance', href: '#' },
        { name: 'Corporate Training', href: '#' },
    ],
    Company: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'News & Insights', href: '#' },
    ],
    Resources: [
        { name: 'Knowledge Center', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'FAQ', href: '#' },
    ],
    Legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Student Policy', href: '/student-policy' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Accessibility', href: '#' },
    ],
};

export default function Footer() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        // Add a subject for the newsletter notification
        formData.append('_subject', 'New Newsletter Subscription');

        try {
            const response = await fetch("https://formsubmit.co/ajax/register@aerorisk.org.my", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setStatus('sent');
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('idle');
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus('idle');
            alert("Something went wrong. Please check your connection.");
        }
    };

    return (
        <footer className="relative bg-[#070b14] pt-48 pb-24 overflow-hidden">
            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/30 to-transparent" />

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4a853]/5 rounded-full blur-[120px]" />

            <div className="container mx-auto relative z-10">
                {/* Main Footer */}
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-20 mb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <a href="#home" className="flex items-center gap-2 mb-6">
                            <div className="relative h-10 w-40">
                                <Image
                                    src="/logo.png"
                                    alt="Aerorisk Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            The world&apos;s leading institution for aviation and space insurance education.
                            Elevating professionals since 1998.
                        </p>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-white font-medium mb-3">Subscribe to our newsletter</h4>
                            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-[#d4a853]/50 focus:outline-none transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className="px-4 py-2.5 rounded-lg bg-[#d4a853] text-[#0a0f1c] font-semibold text-sm hover:bg-[#e8c879] transition-colors disabled:opacity-50"
                                >
                                    {status === 'idle' && 'Subscribe'}
                                    {status === 'sending' && '...'}
                                    {status === 'sent' && '✓'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white font-semibold mb-6">{category}</h4>
                            <ul className="space-y-4">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-[#d4a853] transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853]/0 group-hover:bg-[#d4a853] transition-all" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-12" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Aerorisk Education. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
