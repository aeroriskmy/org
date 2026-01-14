'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
    {
        title: 'Aviation and Space Insurance',
        image: '/courses/aviation_space_insurance_1768061641958.png',
        link: '/courses/aviation-and-space-insurance',
    },
    {
        title: 'Risk and Liabilities in Airport and Airlines Operations',
        image: '/courses/airport_operations_1768061661018.png',
        link: '/courses/risk-and-liabilities-airport-airlines',
    },
    {
        title: 'Aircraft Maintenance, Repair and Overhaul (MRO) Operations',
        image: '/courses/aircraft_maintenance_1768061680499.png',
        link: '/courses/aircraft-mro-operations',
    },
    {
        title: 'Risks and Liabilities in Air Cargo Operations',
        image: '/courses/air_cargo_1768061699676.png',
        link: '/courses/risk-and-liabilities-air-cargo',
    },
    {
        title: 'Aviation Insurance Law',
        image: '/courses/aviation_law_1768061717112.png',
        link: '/courses/aviation-insurance-law',
    },
    {
        title: 'Logistic in Aviation',
        image: '/courses/logistics_aviation_1768061735836.png',
        link: '/courses/logistics-in-aviation',
    },
];

export default function Courses() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="courses" className="section relative overflow-hidden bg-slate-950 py-24">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2a8a8a]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d4a853]/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <span className="text-sm font-medium text-[#d4a853] tracking-wider uppercase mb-2 block font-outfit">
                                Course Program
                            </span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-outfit">
                                Popular Courses
                            </h2>
                        </div>
                        <div className="lg:max-w-md lg:text-right">
                            <p className="text-slate-400 italic text-lg font-light">
                                &ldquo;Live as if you were to die tomorrow. Learn as if you were to live forever&rdquo;
                                <span className="block mt-2 text-[#2a8a8a] font-medium not-italic">
                                    – Mahatma Gandhi
                                </span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Course Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => {
                        const CardContent = (
                            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-[#d4a853]/50 hover:shadow-2xl hover:shadow-[#d4a853]/10 transition-all duration-500 h-full group flex flex-col">
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col justify-between">
                                    <h3 className="text-xl font-bold text-white leading-tight mb-4 font-outfit group-hover:text-[#d4a853] transition-colors duration-300">
                                        {course.title}
                                    </h3>

                                    <div className="flex items-center text-[#2a8a8a] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="h-full"
                            >
                                {course.link ? (
                                    <Link href={course.link} className="block h-full">
                                        {CardContent}
                                    </Link>
                                ) : (
                                    <div className="h-full">
                                        {CardContent}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
