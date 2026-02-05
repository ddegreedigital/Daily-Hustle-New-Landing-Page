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

export default function TermsOfService() {
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
                        Terms of Service
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xs md:text-[15.2px] font-bold uppercase text-[#4B5563] tracking-widest mb-10"
                    >
                        User Agreement & Platform Rules
                    </motion.p>

                    {/* Section 1 */}
                    <motion.section variants={itemVariants} className="mt-10">
                        <h2 className="section-h2">
                            1.  Eligibility & Conduct
                        </h2>

                        <p className="section-p">
                            By using DailyHustle, you represent that you are at least 18 years of age. You agree to provide accurate identification data during the onboarding process. Any attempt to use bots, automated scripts, or VPNs to simulate human engagement is a material breach of these terms.
                        </p>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section variants={itemVariants} className="mt-12">
                        <h2 className="section-h2">
                            2. Proof-of-Work (PoW) Requirement
                        </h2>

                        <p className="section-p">
                            Every task completion requires the submission of a visual proof (screenshot) or digital footprint. DailyHustle reserves the right to reject proof that is blurry, doctored, or from an unauthorized social media handle.
                        </p>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section variants={itemVariants} className="mt-12">
                        <h2 className="section-h2">
                            3.  Institutional & Managed Accounts
                        </h2>

                        <p className="section-p">
                            Institutional clients must maintain a positive balance for campaigns to remain live. DailyHustle is not liable for campaign pauses due to insufficient funding. All strategic deposits are non-refundable once workforce mobilization has commenced.
                        </p>
                    </motion.section>

                    {/* Section 4 */}
                    <motion.section variants={itemVariants} className="mt-12">
                        <h2 className="section-h2">
                            4.  Limitation of Liability
                        </h2>

                        <p className="section-p">
                            DailyHustle acts as an infrastructure provider. We are not responsible for changes in 3rd party social media platform algorithms (e.g., Spotify, TikTok, Meta) that may impact visibility beyond our direct engagement counts.
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
