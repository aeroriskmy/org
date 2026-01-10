'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const subCourses = [
    {
        title: 'Risks & Liabilities in Air Cargo Operations',
        about: 'Air cargo operations covers the entities which operates and provides transportation/logistics services and facilities to deliver goods to various destination. The risks that are exposed to the cargo operators are huge and the consequences are significant. Knowing and understanding on the risks would entail to effective crisis management.',
        duration: '2 Days',
        commencement: 'CLICK HERE'
    }
];

export default function AirCargoPage() {
    return (
        <main className="bg-slate-950 min-h-screen relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2a8a8a]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d4a853]/10 rounded-full blur-[120px]" />
            </div>

            <Navbar />

            {/* Header Section */}
            <section className="relative pt-64 pb-24 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center text-white pt-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-outfit tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
                    >
                        Risks and Liabilities in<br />Air Cargo Operations
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <button className="px-8 py-3 bg-[#d4a853] hover:bg-[#b08833] text-black font-bold rounded-full transition-all shadow-lg shadow-[#d4a853]/20 flex items-center gap-2 mx-auto hover:scale-105 active:scale-95">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            START COURSE
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Course Details List */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col gap-16">
                        {subCourses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-xl border border-slate-800 p-8 flex flex-col lg:flex-row gap-12 hover:border-[#d4a853]/30 transition-all duration-300"
                            >
                                {/* Left: Title */}
                                <div className="lg:w-1/3">
                                    <h3 className="text-2xl font-bold text-white leading-tight font-outfit">
                                        {course.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-[#d4a853] mt-4 rounded-full" />
                                </div>

                                {/* Right: Content */}
                                <div className="lg:w-2/3 space-y-8">
                                    {/* About */}
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2 font-outfit flex items-center gap-2">
                                            <span className="text-[#2a8a8a]">01.</span> About
                                        </h4>
                                        <p className="text-slate-400 leading-relaxed text-sm lg:text-base font-light">
                                            {course.about}
                                        </p>
                                    </div>

                                    {/* Meta Info */}
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-8 pt-6 border-t border-slate-800">
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1 font-outfit">Duration</h4>
                                            <p className="text-[#d4a853] text-sm font-medium">{course.duration}</p>
                                        </div>
                                        {course.commencement && (
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1 font-outfit">Commencement</h4>
                                                {course.commencement === 'CLICK HERE' ? (
                                                    <button className="px-6 py-2 bg-[#2a8a8a]/10 border border-[#2a8a8a] text-[#2a8a8a] text-xs font-bold rounded hover:bg-[#2a8a8a] hover:text-white transition-all uppercase tracking-wider">
                                                        Click Here
                                                    </button>
                                                ) : (
                                                    <p className="text-[#d4a853] font-medium text-sm">{course.commencement}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
