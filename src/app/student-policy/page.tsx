'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function StudentPolicy() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const policySections = [
        {
            title: "Equality & Diversity Policy",
            content: (
                <div className="space-y-6 text-center">
                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Policy Statement</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            We are committed to promoting equality of opportunity, eliminating unlawful discrimination, and fostering an inclusive learning and working environment for all learners, staff, and stakeholders.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Scope</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            This policy applies to all staff, learners, contractors, partners, and visitors engaged with our training programmes.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Legal Framework</h4>
                        <p className="text-gray-400 leading-relaxed text-center">Aligned with:</p>
                        <ul className="list-none text-gray-400 space-y-2 flex flex-col items-center">
                            <li>Equality Act 2010 (UK reference)</li>
                            <li>Malaysian Employment Act 1955</li>
                            <li>Human Rights Commission of Malaysia Act 1999</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Our Commitments</h4>
                        <ul className="list-none text-gray-400 space-y-2 flex flex-col items-center">
                            <li>Provide equal access to learning regardless of race, gender, religion, disability, age, marital status, or any protected characteristic.</li>
                            <li>Make reasonable adjustments for learners with disabilities or additional needs.</li>
                            <li>Provide fair recruitment, assessment, and progression opportunities.</li>
                            <li>Promote cultural sensitivity and respect.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Responsibilities</h4>
                        <ul className="list-none text-gray-400 space-y-2 flex flex-col items-center">
                            <li><strong className="text-gray-300">Management:</strong> Ensures implementation and annual review.</li>
                            <li><strong className="text-gray-300">Trainers/Assessors:</strong> Apply inclusive teaching practices.</li>
                            <li><strong className="text-gray-300">Learners:</strong> Treat others with respect and avoid discriminatory behaviour.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Reporting Discrimination</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            Any learner or staff member may report incidents confidentially to the Programme Manager for investigation.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Health & Safety Policy",
            content: (
                <div className="space-y-6 text-center">
                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Statement of Commitment</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            We are committed to ensuring the health, safety, and well-being of all learners, staff, and visitors in line with the Occupational Safety and Health Act (OSHA) 1994 (Malaysia).
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Responsibilities</h4>
                        <ul className="list-none text-gray-400 space-y-2 flex flex-col items-center">
                            <li><strong className="text-gray-300">Management:</strong> Creates safe training environments, ensures risk assessments.</li>
                            <li><strong className="text-gray-300">Trainers:</strong> Maintain safe classrooms, report hazards.</li>
                            <li><strong className="text-gray-300">Learners:</strong> Follow safety guidance and report unsafe situations.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Key Areas</h4>
                        <ul className="list-none text-gray-400 space-y-2 flex flex-col items-center">
                            <li>Fire safety and emergency procedures</li>
                            <li>First aid availability</li>
                            <li>Safe use of training equipment</li>
                            <li>COVID-19 and communicable disease protocols</li>
                            <li>Incident reporting and documentation</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Risk Assessment</h4>
                        <p className="text-gray-400 leading-relaxed text-center">Regular assessments conducted for:</p>
                        <ul className="list-none text-gray-400 space-y-2 flex flex-col items-center">
                            <li>Classrooms</li>
                            <li>Online delivery platforms</li>
                            <li>Practical activities</li>
                            <li>Field visits (if any)</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Accident Reporting</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            All accidents must be recorded and reviewed to prevent recurrence.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Complaints Policy",
            content: (
                <div className="space-y-6 text-center">
                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Policy Statement</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            We aim to resolve concerns fairly, promptly, and transparently at the lowest level possible.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Who Can Complain</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            Learners, staff, partners, or external stakeholders.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Procedure</h4>

                        <div className="space-y-4 flex flex-col items-center">
                            <div>
                                <h5 className="text-lg font-medium text-[#d4a853] text-center">Informal Resolution</h5>
                                <ul className="list-none text-gray-400 mt-2 flex flex-col items-center">
                                    <li>Raise the issue with trainer or admin team.</li>
                                    <li>Attempt resolution within 5 working days.</li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="text-lg font-medium text-[#d4a853] text-center">Formal Complaint</h5>
                                <ul className="list-none text-gray-400 mt-2 flex flex-col items-center">
                                    <li>Submit written complaint to Programme Manager.</li>
                                    <li>Acknowledgement within 3 working days.</li>
                                    <li>Investigation completed within 10 working days.</li>
                                    <li>Written outcome provided.</li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="text-lg font-medium text-[#d4a853] text-center">Appeal</h5>
                                <ul className="list-none text-gray-400 mt-2 flex flex-col items-center">
                                    <li>Appeals reviewed by senior management not previously involved.</li>
                                    <li>Decision issued within 14 working days.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Confidentiality & non-retaliation</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            Complainants are protected from retaliation, and information is kept confidential.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "Data Protection & GDPR Policy",
            content: (
                <div className="space-y-6 text-center">
                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Purpose</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            To protect personal data collected from learners, staff, and partners and ensure compliance with GDPR principles and Malaysia’s PDPA 2010.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Data We Collect</h4>
                        <ul className="list-none text-gray-400 space-y-2 flex flex-col items-center">
                            <li>Personal identification information</li>
                            <li>Academic records</li>
                            <li>Assessment results</li>
                            <li>Attendance data</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Data Usage</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            Data is used for programme administration, reporting, quality assurance and regulatory compliance.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Principles</h4>
                        <p className="text-gray-400 leading-relaxed text-center">We commit to:</p>
                        <ul className="list-none text-gray-400 space-y-2 flex flex-col items-center">
                            <li>Lawful and transparent processing</li>
                            <li>Limiting data to what is necessary</li>
                            <li>Ensuring accuracy</li>
                            <li>Secure storage and restricted access</li>
                            <li>Retention only for required durations</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Storage & Security</h4>
                        <ul className="list-none text-gray-400 space-y-2 flex flex-col items-center">
                            <li>All digital data stored on encrypted systems.</li>
                            <li>Hard copies secured in locked cabinets.</li>
                            <li>Limited access for authorised personnel only.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Rights of Data Subjects</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            Learners have rights to access, correct, request deletion, and restrict processing of their personal data.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white text-center">Data Breach Process</h4>
                        <p className="text-gray-400 leading-relaxed text-center">
                            Any breach must be reported immediately to the Data Protection Officer (DPO), documented, and addressed within 72 hours where applicable.
                        </p>
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
                            Student <span className="text-[#d4a853]">Policies</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            Our commitment to equality, safety, fairness, and privacy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
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

                                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#d4a853] font-outfit relative z-10 text-center">
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
