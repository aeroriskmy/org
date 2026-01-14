'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const trainers = [
    {
        name: 'Irene Sanchez del Rio Moreta',
        role: 'Aviation and Insurance Practicing Lawyer',
        image: '/trainers/irene.jpg',
        quote: 'The Art of Teaching is the Art of Assisting Discovery – Mark Van Doren',
        bio: [
            'Irene is an Aviation and Insurance Practicing Lawyer at LEI ABOGADOS and a founding member. She is also an academic coordinator and Member of the Board of Directors AEDAE (Spanish Association of Air and Space Law) and a Legal Counsel of Canary Islands Air SL Madrid, Spain.',
            'She has more than ten years of experience in air transport and in insurance law.',
            'She serves as the Academic and Vocal Coordinator of the Board of Directors of the Spanish Association of Aeronautical and Space Law and Secretary of the Aeronautical and Space Law Section of the Madrid Bar Association. She is also a founding member of SPBAA (Spanish Association of Private and Business Aviation) and lectures Aviation Law programs in universities.'
        ],
        education: [
            'Graduated from Universitat Autònoma de Barcelona',
            'Masters degree in Air transport Management',
            'Universidad Politecnica de Madrid in Masters in Gestion de Sistem Aeronauticos',
            'Airline Contract law offered by IATA'
        ]
    },
    {
        name: 'Dr Maniraj Mayan',
        role: 'Aviation and Aerospace Insurance Academician',
        image: '/trainers/maniraj.jpg',
        quote: 'Creating awareness, knowledge and passion in people about the importance of insurance risk management.',
        bio: [
            'Dr Maniraj Mayan is an academician who has endeavoured into the field of aviation and aerospace insurance to create awareness, knowledge and passion in people about the importance of insurance risk management in the aviation and aerospace industry.',
            'He has been in the academic and training field for more than 30 years.'
        ],
        education: [
            'Doctor of Business Administration (DBA) from Asia e University',
            'Master in Business Administration from University of Western Sydney Australia'
        ]
    },
    {
        name: 'Dr Wan Mazlina Wan Mohamed',
        role: 'Head of Training and CPD at MITRANS UiTM',
        image: '/trainers/wan_mazlina.jpg',
        quote: 'Enhancing operational performance through research, training and continuous professional development.',
        bio: [
            'Dr Wan Mazlina Wan Mohamed is the head of the training and continual Professional Development (CPD) at Malaysian Institute of Transport (MITRANS) UiTM, Shah Alam. She is a Senior Lecturer at the faculty of Mechanical Engineering in UiTM.',
            'She is actively involved in aviation and land transport research and consultancy. She conducts training and has organised webinars besides teaching and supervising students. She is a member of technical committee of Ministry of Transport Malaysia.'
        ],
        education: [
            'PhD from UiTM',
            'MSc in Air Transport Management from Cranfield University, UK',
            'Double degree in Aerospace Engineering and Aircraft Maintenance Engineering from St Louis University, USA'
        ]
    },
    {
        name: 'Betty Bonnardel-Azzarelli',
        role: 'CEO of AB5Consulting.com',
        image: '/trainers/betty.jpg',
        quote: 'Expertise in satellite sector, market access, and regulatory affairs.',
        bio: [
            'Betty is CEO of AB5Consulting.com. She has vast experience in the satellite sector, market access, spectrum, filings, and regulatory.',
            'She works with international organizations, regulators, and satellite operators.'
        ],
        education: []
    },
    {
        name: 'Mourad El Aroui',
        role: 'Underwriter at Tunis Re',
        image: '/trainers/mourad_el_aroui.jpg',
        quote: 'Specialized in Aviation Underwriting and Reinsurance strategies.',
        bio: [
            'Mourad El Aroui is an experienced Underwriter at Tunis Re. He serves as a trainer specializing in Aviation Underwriting and Reinsurance, sharing his extensive industry knowledge with professionals.'
        ],
        education: []
    },
    {
        name: 'Dr. Lourdes Gregory Stephen Santiago',
        role: 'Lawyer & Aviation Insurance Trainer',
        image: '/trainers/lourdes_santiago.jpg',
        quote: ' bridging the gap between legal principles and aviation insurance practice.',
        bio: [
            'Dr. Lourdes Gregory Stephen Santiago is a lawyer by profession with deep expertise in the aviation sector. He actively trains and teaches professionals on Aviation Insurance law and Claims management.'
        ],
        education: []
    }
];

export default function TrainersPage() {
    const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);

    return (
        <main className="bg-slate-950 min-h-screen relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2a8a8a]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d4a853]/10 rounded-full blur-[120px]" />
            </div>

            <Navbar />

            {/* Spacer to guarantee gap - "Hidden barrier" */}
            <div className="h-32 md:h-48 w-full"></div>

            {/* Trainers Grid */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {trainers.map((trainer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-900/50 backdrop-blur-md rounded-[2rem] border border-slate-800/50 hover:border-[#d4a853]/50 hover:shadow-2xl hover:shadow-[#d4a853]/10 transition-all duration-300 p-8 flex flex-col items-center text-center group"
                            >
                                {/* Image */}
                                <div className="relative w-48 h-48 mb-8">
                                    <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#d4a853]/20 group-hover:border-[#d4a853] transition-colors duration-500 shadow-xl">
                                        <Image
                                            src={trainer.image}
                                            alt={trainer.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute -inset-4 bg-[#d4a853]/20 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-2 font-outfit">
                                    {trainer.name}
                                </h3>
                                <p className="text-[#d4a853] font-medium mb-4 text-sm tracking-wide uppercase">
                                    {trainer.role}
                                </p>
                                <p className="text-slate-400 mb-8 text-sm leading-relaxed line-clamp-3">
                                    {trainer.bio[0]}
                                </p>

                                <button
                                    onClick={() => setSelectedTrainer(trainer)}
                                    className="mt-auto px-8 py-3 rounded-full bg-slate-800 text-white font-medium text-sm hover:bg-[#d4a853] hover:text-black transition-all duration-300 active:scale-95 border border-slate-700 hover:border-[#d4a853]"
                                >
                                    View Full Profile
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Profile Modal */}
            <AnimatePresence>
                {selectedTrainer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTrainer(null)}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700 relative"
                        >
                            <button
                                onClick={() => setSelectedTrainer(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors z-10"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-2/5 relative h-64 md:h-auto min-h-[300px] bg-slate-800">
                                    <Image
                                        src={selectedTrainer.image}
                                        alt={selectedTrainer.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:hidden" />
                                    <div className="absolute bottom-0 left-0 p-8 md:hidden">
                                        <h3 className="text-2xl font-bold font-outfit text-white">{selectedTrainer.name}</h3>
                                        <p className="text-[#d4a853] font-medium text-sm">{selectedTrainer.role}</p>
                                    </div>
                                </div>
                                <div className="md:w-3/5 p-8 md:p-12">
                                    <div className="hidden md:block mb-8">
                                        <h3 className="text-3xl font-bold text-white mb-2 font-outfit">{selectedTrainer.name}</h3>
                                        <p className="text-[#d4a853] font-bold text-lg">{selectedTrainer.role}</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                <span className="w-8 h-[1px] bg-[#2a8a8a]"></span>
                                                Biography
                                            </h4>
                                            <div className="space-y-4">
                                                {selectedTrainer.bio.map((paragraph, i) => (
                                                    <p key={i} className="text-slate-300 leading-relaxed text-sm lg:text-base font-light">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        {selectedTrainer.education && selectedTrainer.education.length > 0 && (
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-[1px] bg-[#2a8a8a]"></span>
                                                    Education
                                                </h4>
                                                <ul className="space-y-3">
                                                    {selectedTrainer.education.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-light">
                                                            <svg className="w-5 h-5 text-[#d4a853] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                            </svg>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Spacer */}
            <div className="h-32"></div>

            <Footer />
        </main>
    );
}
