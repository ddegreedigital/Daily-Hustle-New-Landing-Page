"use client"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import Link from "next/link"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
}

export default function ContractSLAsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white px-4 py-20">
                <motion.div
                    className="mx-auto max-w-3xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl font-black text-gray-900 uppercase mb-4 tracking-tighter"
                    >
                        CONTRACT SLAs
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xs md:text-[15.2px] font-bold uppercase text-[#4B5563] tracking-widest mb-10"
                    >
                        Last updated: February 2025
                    </motion.p>

                    {/* Section 1 */}
                    <motion.section variants={itemVariants} className="mt-10">
                        <h2 className="section-h2">
                            1. Service Availability & Uptime
                        </h2>

                        <p className="section-p">
                            DailyHustle guarantees a platform availability of 99.5% for all
                            Institutional tier clients. Our infrastructure is hosted on
                            geographically redundant cloud servers to ensure minimal disruption
                            to campaign deployment.
                        </p>

                        <h3 className="font-extrabold text-[0.85rem] text-[#111827] mt-6 mb-3 uppercase">1.1 Technical Support Tiers</h3>

                        <div className="mt-6 space-y-3">
                            <Bullet>
                                <strong className="font-bold">Institutional Clients:</strong> Dedicated account manager
                                with &lt; 4 hour response time during business hours.
                            </Bullet>

                            <Bullet>
                                <strong className="font-bold">Standard Campaigns:</strong> &lt; 24 hour response time via
                                the support dashboard.
                            </Bullet>
                        </div>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section variants={itemVariants} className="mt-12">
                        <h2 className="section-h2">
                            2. Deployment Timelines
                        </h2>

                        <p className="section-p">
                            We commit to strict execution cycles to ensure your brand captures
                            digital momentum effectively.
                        </p>

                        <div className="mt-6 space-y-3">
                            <Bullet>
                                <strong className="font-bold">Institutional Deployment:</strong> Complete workforce
                                mobilization within 24 hours of budget confirmation and strategy
                                sign-off.
                            </Bullet>

                            <Bullet>
                                <strong className="font-bold">Standard Campaigns:</strong> Deployment between 48 – 72
                                hours.
                            </Bullet>

                            <Bullet>
                                <strong className="font-bold">Rush Setup:</strong> 12 – 24 hour “Critical Spike”
                                deployment available for surprise music drops or award voting
                                (subject to surcharge).
                            </Bullet>
                        </div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section variants={itemVariants} className="mt-12">
                        <h2 className="section-h2">
                            3. Engagement Integrity & Quality Control
                        </h2>

                        <p className="section-p">
                            DailyHustle operates on a “Success-Based” billing model.
                            Institutional clients only pay for engagements that pass our
                            automated and manual “Proof-of-Work” (PoW) audit.
                        </p>

                        <div className="mt-6 space-y-3">
                            <Bullet>
                                Any engagement flagged as <em>“Bot-driven”</em> or{" "}
                                <em>“Duplicate”</em> is automatically purged and credited back to
                                the campaign budget.
                            </Bullet>
                        </div>
                    </motion.section>

                    {/* Back Button */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16"
                    >
                        <Link
                            href="/"
                            className="bg-[#BE123C] mt-12 px-8 py-3 bg-brand-red text-white font-black text-[10px] uppercase rounded-xl"
                        >
                            Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </>
    )
}

function Bullet({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-3 section-bullet">
            <span className="text-[#BE123C] font-bold">✓</span>
            <p className="leading-relaxed text-gray-700">{children}</p>
        </div>
    )
}
