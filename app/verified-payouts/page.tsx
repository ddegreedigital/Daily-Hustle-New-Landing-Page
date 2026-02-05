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

export default function VerifiedPayouts() {
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
                        Verified Payouts
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xs md:text-[15.2px] font-bold uppercase text-[#4B5563] tracking-widest mb-10"
                    >
                        Transparent Earnings Infrastructure
                    </motion.p>

                    {/* Section 1 */}
                    <motion.section variants={itemVariants} className="mt-10">
                        <h2 className="section-h2">
                            1. Wallet & Credit System
                        </h2>

                        <p className="section-p">
                            Earnings are credited to your DailyHustle worker wallet instantly upon the employer's approval of your task proof.
                            <br /> Every task is audited for accuracy before the payout is triggered.
                        </p>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section variants={itemVariants} className="mt-12">
                        <h2 className="section-h2">
                            2. Bank Withdrawal Protocols
                        </h2>

                        <p className="section-p">
                            We utilize verified Nigerian banking APIs to ensure secure and fast transfers. Funds are typically processed within 1 to 4 business hours after a withdrawal request is initiated by the worker.
                        </p>

                        <div className="mt-6 space-y-3">
                            <Bullet>
                                Minimum withdrawal threshold: ₦1,000.
                            </Bullet>

                            <Bullet>
                                Standard bank switching fees of 1.5% apply to all external transfers.
                            </Bullet>
                        </div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section variants={itemVariants} className="mt-12">
                        <h2 className="section-h2">
                            3.  Anti-Fraud Security
                        </h2>

                        <p className="section-p">
                            Withdrawals are subject to account standing audits. Accounts found using VPNs, automation, or multiple identities will have their payouts frozen pending a manual review by the D-Degree Hub compliance team.
                        </p>
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
