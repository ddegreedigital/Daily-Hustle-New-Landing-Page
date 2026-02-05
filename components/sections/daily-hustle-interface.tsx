"use client"

import { motion } from "framer-motion"

export function DailyHustleInterface() {
    return (
        <section id="experience" className="py-24 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[10px] font-black uppercase text-brand-red tracking-[0.4em] mb-4">
                        Interfac Sneak-Peek
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900">
                        Mock Data  <span className="text-brand-red">Processes</span>
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Mock UI: Worker Dashboard */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                        className="p-1 bg-gray-900 shadow-2xl relative rounded-[1.8rem] hover:shadow-[#c4162a]/20">
                        {/* <div className="bg-white rounded-[1.8rem] overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-[#BE123C] flex items-center justify-center text-white text-[10px] font-bold">
                                        JD
                                    </div>
                                    <h4 className="text-[11px] font-black uppercase">
                                        Worker Dashboard
                                    </h4>
                                </div>
                                <span className="text-[9px] font-black bg-green-100 text-green-600 px-2 py-1 rounded">
                                    VERIFIED
                                </span>
                            </div>

                            <div className="p-8">
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                                        <p className="text-[8px] font-black text-gray-400 uppercase mb-1">
                                            Total Earning
                                        </p>
                                        <p className="text-xl font-black text-brand-red">
                                            ₦42,500.00
                                        </p>
                                    </div>

                                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <p className="text-[8px] font-black text-gray-400 uppercase mb-1">
                                            Tasks Done
                                        </p>
                                        <p className="text-xl font-black text-gray-900">184</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">
                                        Recent Activity
                                    </p>

                                    <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 rounded-full bg-[#BE123C]"></div>
                                            <p className="text-[10px] font-bold uppercase text-gray-700">
                                                App Install Approval
                                            </p>
                                        </div>
                                        <span className="text-[10px] font-black text-green-600">
                                            +₦1,500
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 rounded-full bg-[#BE123C]"></div>
                                            <p className="text-[10px] font-bold uppercase text-gray-700">
                                                Withdrawal to Bank
                                            </p>
                                        </div>
                                        <span className="text-[10px] font-black text-gray-400">
                                            -₦5,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                          <div className="rounded-[1.8rem] overflow-hidden h-[409px]">
                            <img
                                src="/images/worker-dashboard-2.jpeg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="bg-white absolute -right-6 -bottom-6 glass-card p-4 rounded-2xl shadow-xl border border-red-100 flex items-center space-x-3 animate-pulse">
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white">
                                💰
                            </div>
                            <p className="text-[9px] font-black uppercase text-gray-900 leading-tight">
                                Earnings <br /> Updated
                            </p>
                        </div>
                    </motion.div>

                    {/* Mock UI: Employer Campaign Monitor */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                        className="hustle-card p-1 rounded-[1.8rem] bg-gray-900 shadow-2xl relative hover:shadow-[#c4162a]/20">
                        {/* <div className="bg-white rounded-[1.8rem] overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-[10px] font-bold">
                                        🏢
                                    </div>
                                    <h4 className="text-[11px] font-black uppercase">
                                        Employer Console
                                    </h4>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    <span className="text-[9px] font-black text-gray-400 uppercase">
                                        ACTIVE
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-end space-x-2 h-32 mb-8">
                                    <div className="flex-1 bg-red-100 rounded-t-lg h-1/2"></div>
                                    <div className="flex-1 bg-red-200 rounded-t-lg h-3/4"></div>
                                    <div className="flex-1 bg-[#BE123C] rounded-t-lg h-full relative">
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-black text-brand-red">
                                            LIVE
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-red-300 rounded-t-lg h-2/3"></div>
                                    <div className="flex-1 bg-red-100 rounded-t-lg h-1/3"></div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">
                                        Campaign Performance
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-50 rounded-2xl">
                                            <p className="text-[14px] font-black text-gray-900">
                                                12,500+
                                            </p>
                                            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">
                                                Total Actions
                                            </p>
                                        </div>

                                        <div className="p-4 bg-gray-50 rounded-2xl">
                                            <p className="text-[14px] font-black text-gray-900">
                                                98.2%
                                            </p>
                                            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">
                                                Success Rate
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div> */}
                        <div className="rounded-[1.8rem] overflow-hidden h-[409px]">
                            <img
                                src="/images/employer-console-2.jpeg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* <img src="/images/employer-console.jpeg" alt="" className="!h-[409px] rounded-[1.8rem] overflow-hidden h-full" /> */}

                        <div className="bg-white absolute -left-6 -bottom-6 glass-card p-4 rounded-2xl shadow-xl border border-red-100 flex items-center space-x-3">
                            <div className="w-8 h-8 bg-[#BE123C] rounded-lg flex items-center justify-center text-white">
                                📊
                            </div>
                            <p className="text-[9px] font-black uppercase text-gray-900 leading-tight">
                                Insight <br /> Generated
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}