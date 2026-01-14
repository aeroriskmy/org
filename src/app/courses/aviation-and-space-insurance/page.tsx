'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const subCourses = [
    {
        title: 'Aerorisk Intermediate Programme in Aviation Insurance Practice',
        about: 'In the aviation industry, choosing the right aircraft insurance is very critical and important. It is important to understand knowledge in aviation insurance for people to embark into the aviation insurance industry. The crucial aspect in this is the knowledge on aircrafts and its function, the mechanism of flying and finally the underwriting and management of aviation insurance. It is a practical industry oriented course and enables people in the aviation insurance industry to perform effectively once completed. This is a ATHE endorsed programme',
        duration: '60 guided learning hours / 4 months',
        commencement: 'Registration is open now!',
        documentUrl: '/documents/Intermediate_Programme.docx'
    },
    {
        title: 'Aerorisk Advanced Programme in Aviation Insurance Practice',
        about: 'The Aerorisk Advanced Programme in Aviation Insurance Practice builds upon the subjects covered in the intermediate and give a more extensive coverage of aviation insurance knowledge and understanding. You will expand your knowledge and skills more by learning about types of aircrafts and its function, reinsurance, law& claims and policies, clauses and endorsements. This is a ATHE endorsed programme',
        duration: '100 guided learning hours / 4 months',
        commencement: 'Registration is open now!',
        documentUrl: '/documents/Advanced_Programme.docx'
    },
    {
        title: 'Certificate in Space Insurance',
        about: 'Since the first policy was purchased for the launch of Early Bird in 1965, space insurance has been a key enabler allowing the commercial space sector to grow and flourish. The majority of communication satellites and an ever-growing number of Earth observation satellites are now insured, as well as a small number of satellites for other applications. New technologies are to be introduced in the coming years to ensure the commercial space sector remains competitive against terrestrial alternatives. It is crucial to understand the risks and liabilities in the space sector on how the insurance is covered. It is a complete and comprehensive course which enables anyone to know in detail on how the space insurance works. The duration of this course is 3 months.',
        duration: '3 months',
        commencement: ''
    },
    {
        title: 'Space Insurance Seminar',
        about: 'This seminar introduces the development in space sector and how insurance plays its role to cover risks and liabilities. This two day online seminar will provide audience with the challenges faced by insurers in handling space risks. Participants will be awarded certificate of attendance at the end of the seminar.',
        duration: '2 days',
        commencement: 'CLICK HERE'
    }
];

export default function AviationSpaceInsurancePage() {
    return (
        <main className="bg-slate-950 min-h-screen relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2a8a8a]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d4a853]/10 rounded-full blur-[120px]" />
            </div>

            <Navbar />

            {/* Header Section */}
            <section className="relative pt-96 pb-20 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center text-white pt-12">


                </div>
            </section>

            {/* Spacer to guarantee gap */}
            <div className="h-24 w-full"></div>

            {/* Course Details List */}
            <section className="pt-64 pb-48 relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col gap-8">
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
                                        {course.documentUrl && (
                                            <div className="mt-4">
                                                <a
                                                    href={course.documentUrl}
                                                    download
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-sm font-medium rounded-lg hover:bg-[#d4a853] hover:text-white transition-all duration-300"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    Download Prospectus (.docx)
                                                </a>
                                            </div>
                                        )}
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

            {/* Spacer to guarantee gap */}
            <div className="h-24 w-full"></div>

            <Footer />
        </main>
    );
}
