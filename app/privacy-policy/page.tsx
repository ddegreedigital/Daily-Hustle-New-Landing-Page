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

export default function PrivacyPolicy() {
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
                        Privacy Policy
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xs md:text-[15.2px] font-bold uppercase text-[#4B5563] tracking-widest mb-10"
                    >
                        NDPA Compliant Data Governance
                    </motion.p>

                    {/* Section 1 */}
                    <motion.section variants={itemVariants} className="mt-10">
                        <h2 className="section-h2">
                            1.  Commitment to Data Privacy
                        </h2>

                        <p className="section-p">
                            DailyHustle is fully compliant with the **Nigeria Data Protection Act (NDPA)**. We recognize the importance of your personal data and are committed to protecting it through rigorous encryption and access controls.
                        </p>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section variants={itemVariants} className="mt-12">
                        <h2 className="section-h2">
                            2. Data Collection & Use
                        </h2>

                        <p className="section-p">
                            We collect Name, Phone Number, and BVN/NIN for KYC verification as required by Nigerian financial regulations for bank payouts. Employer data includes brand details and campaign assets.
                        </p>

                        <div className="mt-6 space-y-3">
                            <Bullet>
                                We do **not** sell user data to 3rd party advertising networks.
                            </Bullet>

                            <Bullet>
                                Your bank data is encrypted and used only for payout processing.
                            </Bullet>

                            <Bullet>
                                Geographic data is used solely to verify the local relevance of task completions.
                            </Bullet>
                        </div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section variants={itemVariants} className="mt-12">
                        <h2 className="section-h2">
                            3.  Your Rights
                        </h2>

                        <p className="section-p">
                            Under the NDPA, users have the right to request access to their stored data, rectify inaccuracies, or request account deletion. To exercise these rights, contact our Data Protection Officer at <a href="mailto:info@dailyhustle.fun">info@dailyhustle.fun.</a>
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
