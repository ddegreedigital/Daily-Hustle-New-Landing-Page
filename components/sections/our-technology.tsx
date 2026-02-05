"use client"

import { motion } from "framer-motion"


export function OurTechnology() {
    return (
        <section id="process" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-xs font-black uppercase text-brand-red tracking-widest mb-4">
                        Our Technology
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900">
                        Seamless <span className="text-brand-red">Engagement</span> Flow
                    </h3>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                        className="p-10 rounded-[2.5rem] bg-white process-line shadow-md border border-gray-200 hover:border-[#BE123C]/20 hover:shadow-xl hover:shadow-[#c4162a]/20">
                        <div className="w-14 h-14 bg-red-50 text-brand-red rounded-2xl flex items-center justify-center text-2xl mb-8 font-black">
                            01
                        </div>
                        <h4 className="text-lg font-black uppercase mb-4 text-gray-900">
                            Smart Deployment
                        </h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            Employers launch tasks via our dashboard, targeting specific
                            demographics or regions across Nigeria instantly.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                        className="hustle-card p-10 rounded-[2.5rem] bg-white process-line shadow-md border border-gray-200 hover:border-[#BE123C]/20 hover:shadow-xl hover:shadow-[#c4162a]/20">
                        <div className="w-14 h-14 bg-red-50 text-brand-red rounded-2xl flex items-center justify-center text-2xl mb-8 font-black">
                            02
                        </div>
                        <h4 className="text-lg font-black uppercase mb-4 text-gray-900">
                            Human Execution
                        </h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            Verified workers complete tasks (likes, downloads, reviews) and submit
                            real-time photographic proof of work.
                        </p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                    className="hustle-card p-10 rounded-[2.5rem] bg-gray-900 text-white shadow-xl shadow-red-900/10 shadow-md hover:shadow-xl hover:shadow-[#c4162a]/20">
                    <div className="w-14 h-14 bg-[#BE123C] text-white rounded-2xl flex items-center justify-center text-2xl mb-8 font-black">
                        03
                    </div>
                    <h4 className="text-lg font-black uppercase mb-4">
                        Instant Validation
                    </h4>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                        Our anti-fraud system verifies the proof. Employers get results, and
                        workers receive instant payouts to their wallets.
                    </p>
            </motion.div>
        </div>
            </div >
        </section >

    )
}