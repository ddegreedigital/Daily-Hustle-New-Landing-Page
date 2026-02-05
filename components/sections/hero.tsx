"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative">
            <div className="overflow-hidden mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-red-50 px-4 py-2 text-[11px] font-semibold tracking-wide text-[color:var(--brand-red)]">
                        <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--brand-red)]" />
                        VERIFIED PLATFORM & INSTANT PAYOUTS
                    </span>

                    <h1 className="text-[56px] leading-[1.02] font-extrabold tracking-tight">
                        EASY TASKS.
                        <br />
                        <span className="text-[color:var(--brand-red)]">DAILY CASH.</span>
                    </h1>

                    <p className="mt-6 max-w-md text-[15px] leading-7 text-black/55">
                        Join 50,000+ Nigerians earning real money daily using just their mobile phone.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link href="https://workers.dailyhustle.fun/" target="_blank" className="rounded-full bg-[color:var(--brand-red)] px-7 py-3.5 text-white text-[13px] font-semibold shadow-[var(--shadow-soft)]">
                            Start Earning Now
                        </Link>
                        <Link href="https://workers.dailyhustle.fun/" target="_blank" className="rounded-full border border-black/10 px-7 py-3.5 text-[13px] font-semibold">
                            Hire Workers
                        </Link>
                    </div>
                </div>

                {/* Right */}
                <motion.div
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        duration: 4.8,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    className="flex justify-end"
                >
                    <div className="relative w-full max-w-sm">
                        <div
                            className="relative overflow-hidden rotate-2 rounded-[3rem] bg-gray-900 p-3 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80"
                                alt="Payment Received Visual"
                                className="rounded-[2.2rem]"
                            />
                        </div>

                        <div className="bg-white absolute -bottom-6 -left-8 w-56 animate-bounce rounded-[2rem] border border-white/50 p-6 shadow-2xl glass-card">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-xl font-bold text-white shadow-lg shadow-green-100">
                                ✓
                            </div>

                            <p className="mb-0.5 text-[8px] font-black uppercase tracking-widest text-gray-400">
                                Payment Received
                            </p>

                            <p className="text-xl font-black text-gray-900">
                                ₦25,000.00
                            </p>
                        </div>
                    </div>
                    {/* </div> */}
                </motion.div>

            </div>
            {/* <div className="bg-gray-50/30 py-8 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            NDPA Compliant
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            Proof-of-Work
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            Anti-Fraud Tech
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            Verified Bank Payouts
                        </span>
                    </div>
                </div>
            </div> */}

        </section>
    )
}
