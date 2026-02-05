// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// export function PocketToday() {
//   return (
//     <section className="relative py-28 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center">
//         {/* Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl font-extrabold leading-tight">
//             PUT EXTRA MONEY IN YOUR
//             <br />
//             <span className="text-brand-red">POCKET TODAY</span>
//           </h2>

//           <p className="mt-4 max-w-md text-neutral-600">
//             Daily Hustle transforms your online time into income.
//           </p>

//           <ul className="mt-8 space-y-4">
//             <li className="rounded-xl bg-neutral-50 px-5 py-4 shadow-soft">
//               Sign up for free
//             </li>
//             <li className="rounded-xl bg-neutral-50 px-5 py-4 shadow-soft">
//               Pick a task
//             </li>
//             <li className="rounded-xl bg-neutral-50 px-5 py-4 shadow-soft">
//               Get paid instantly
//             </li>
//           </ul>
//         </motion.div>

//         {/* Visual */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <motion.div
//             whileHover={{ y: -8 }}
//             className="relative z-10 rounded-2xl bg-white p-6 shadow-soft"
//           >
//             <p className="font-semibold">Live Tasks</p>
//             <div className="mt-4 h-24 rounded-xl bg-neutral-100" />
//           </motion.div>

//           {/* Decorative tilted phone */}
//           <Image
//             src="/images/iphone-tilt.png"
//             alt=""
//             width={280}
//             height={560}
//             className="absolute -right-16 -top-20 rotate-[-14deg] opacity-90"
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }



"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PocketToday() {
    return (
        <section id="earn" className="relative overflow-hidden py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
                {/* Text */}
                {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] text-black/45">
                <span>💰</span>
              </div>

              <h2 className="text-[42px] leading-[1.05] font-extrabold tracking-tight sm:text-[48px]">
                PUT EXTRA MONEY IN
                <br />
                YOUR <span className="text-[color:var(--brand-red)]">POCKET TODAY</span>
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-black/55">
                Daily Hustle transforms your online time into income. No fees, no hidden
                costs, just real results.
              </p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-center gap-4 rounded-[20px] bg-[#F7F7F8] px-6 py-5 shadow-[var(--shadow-soft)]">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0B0F19] text-white text-sm font-bold">
                    1
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold">SIGNUP FOR FREE</p>
                    <p className="text-[11px] tracking-wide text-black/40">
                      SETUP TAKES 2 MINUTES
                    </p>
                  </div>
                </li>

                <li className="flex items-center gap-4 rounded-[20px] bg-[#F7F7F8] px-6 py-5 shadow-[var(--shadow-soft)]">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0B0F19] text-white text-sm font-bold">
                    2
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold">PICK A TASK</p>
                    <p className="text-[11px] tracking-wide text-black/40">
                      HUNDREDS OF LIVE JOBS
                    </p>
                  </div>
                </li>

                <li className="flex items-center gap-4 rounded-[20px] bg-[#F7F7F8] px-6 py-5 shadow-[var(--shadow-soft)]">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0B0F19] text-white text-sm font-bold">
                    3
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold">GET PAID INSTANTLY</p>
                    <p className="text-[11px] tracking-wide text-black/40">
                      DIRECT BANK TRANSFER
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div> */}
                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55 }}>
                    <div className="text-4xl mb-6">💰</div>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-6 leading-[1.1]">
                        Put extra money in your <br />
                        <span className="text-brand-red">pocket today</span>
                    </h2>
                    <p className="text-base text-gray-500 font-medium mb-10 max-w-md leading-relaxed">
                        Daily Hustle transforms your online time into income. No fees, no hidden costs, just real results.
                    </p>

                    <div className="space-y-4">
                        <div className="group flex items-center space-x-6 p-6 rounded-[2rem] bg-gray-50 hover:bg-red-50/50 border border-transparent hover:border-red-100 transition">
                            <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-black text-sm group-hover:bg-brand-red transition shadow">
                                1
                            </div>
                            <div>
                                <h4 className="text-[13px] font-black uppercase text-gray-900 tracking-tight">
                                    Signup for Free
                                </h4>
                                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wide">
                                    Setup takes 2 minutes
                                </p>
                            </div>
                        </div>

                        <div className="group flex items-center space-x-6 p-6 rounded-[2rem] bg-gray-50 hover:bg-red-50/50 border border-transparent hover:border-red-100 transition">
                            <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-black text-sm group-hover:bg-brand-red transition shadow">
                                2
                            </div>
                            <div>
                                <h4 className="text-[13px] font-black uppercase text-gray-900 tracking-tight">
                                    Pick a Task
                                </h4>
                                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wide">
                                    Hundreds of live jobs
                                </p>
                            </div>
                        </div>

                        <div className="group flex items-center space-x-6 p-6 rounded-[2rem] bg-gray-50 hover:bg-red-50/50 border border-transparent hover:border-red-100 transition">
                            <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-black text-sm group-hover:bg-brand-red transition shadow">
                                3
                            </div>
                            <div>
                                <h4 className="text-[13px] font-black uppercase text-gray-900 tracking-tight">
                                    Get Paid Instantly
                                </h4>
                                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wide">
                                    Direct bank transfer
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Visual */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55 }}
                    className="relative"
                >
                    Tilted phone behind
                    <div className="pointer-events-none absolute right-[-40px] top-[-90px] hidden sm:block">
                        <Image
                            src="/images/iphone-tilt.png"
                            alt=""
                            width={340}
                            height={680}
                            className="rotate-[-14deg] opacity-90"
                            priority
                        />
                    </div>

                    Foreground card
                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                        className="relative z-10 mx-auto w-full max-w-[520px] rounded-[26px] bg-white p-6 sm:p-7 shadow-[var(--shadow-soft)]"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400/20 text-yellow-600 font-bold">
                                    ⚡
                                </div>
                                <div>
                                    <p className="text-[14px] font-extrabold tracking-tight">LIVE TASKS</p>
                                    <p className="text-[11px] text-black/40">ACTIVE</p>
                                </div>
                            </div>

                            <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-semibold text-[color:var(--brand-red)]">
                                ACTIVE
                            </span>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between rounded-2xl bg-[#F7F7F8] px-5 py-4">
                                <div className="flex items-center gap-4">
                                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-[var(--shadow-soft)]">
                                        🎓
                                    </div>
                                    <div>
                                        <p className="text-[12px] font-semibold">COURSE REFERRAL</p>
                                        <p className="text-[11px] text-black/40">AFFILIATE • ₦2,500</p>
                                    </div>
                                </div>
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                            </div>

                            <div className="flex items-center justify-between rounded-2xl bg-[#F7F7F8] px-5 py-4">
                                <div className="flex items-center gap-4">
                                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-[var(--shadow-soft)]">
                                        💬
                                    </div>
                                    <div>
                                        <p className="text-[12px] font-semibold">WHATSAPP STATUS</p>
                                        <p className="text-[11px] text-black/40">WHATSAPP • ₦600</p>
                                    </div>
                                </div>
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                            </div>

                            <button className="mt-2 w-full rounded-2xl bg-[#0B0F19] py-4 text-[12px] font-semibold tracking-[0.25em] text-white">
                                EXPLORE JOBS
                            </button>
                        </div>
                    </motion.div>
                </motion.div> */}

                {/* Right side */}
                <div className="relative">
                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                        className="relative z-10 mx-auto"
                    >
                        <div className="absolute -inset-8 bg-red-50/40 rounded-[4rem] -rotate-3 blur-2xl"></div>
                        <div className="relative hustle-card bg-white p-8 shadow-2xl hover:shadow-[#c4162a]/10 border-none">
                            <div className="flex items-center justify-between mb-8 border-b pb-6 border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-xl shadow shadow-yellow-100">
                                        ⚡
                                    </div>
                                    <h4 className="text-lg font-black uppercase tracking-tighter">Live Marketplace</h4>
                                </div>
                                <span className="text-[9px] font-black uppercase text-brand-red bg-red-50 px-3 py-1 rounded-full border border-red-100 animate-pulse tracking-widest text-center">
                                    Top Jobs
                                </span>
                            </div>

                            <div className="max-h-[400px] overflow-y-auto job-feed-scroll pr-3 mb-8 space-y-4">
                                <div className="p-4 rounded-2xl bg-white border border-red-50 flex items-center justify-between hover:border-brand-red transition shadow-sm">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                                            f
                                        </div>
                                        <div>
                                            <h5 className="text-[11px] font-black uppercase text-gray-900">Facebook Follow &amp; Like</h5>
                                            <p className="text-[9px] text-gray-400 font-black uppercase">₦20</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white border border-red-50 flex items-center justify-between hover:border-brand-red transition shadow-sm">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg">
                                            📸
                                        </div>
                                        <div>
                                            <h5 className="text-[11px] font-black uppercase text-gray-900">Instagram Like &amp; Comment</h5>
                                            <p className="text-[9px] text-gray-400 font-black uppercase">Engagement • ₦15</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white border border-red-50 flex items-center justify-between hover:border-brand-red transition shadow-sm">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white text-lg">
                                            ▶
                                        </div>
                                        <div>
                                            <h5 className="text-[11px] font-black uppercase text-gray-900">YouTube Subscribe</h5>
                                            <p className="text-[9px] text-gray-400 font-black uppercase">Video • ₦15</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white border border-red-50 flex items-center justify-between hover:border-brand-red transition shadow-sm">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                                            in
                                        </div>
                                        <div>
                                            <h5 className="text-[11px] font-black uppercase text-gray-900">LinkedIn Connection</h5>
                                            <p className="text-[9px] text-gray-400 font-black uppercase">Professional • ₦10</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white border border-red-50 flex items-center justify-between hover:border-brand-red transition shadow-sm">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white text-lg">
                                            🎵
                                        </div>
                                        <div>
                                            <h5 className="text-[11px] font-black uppercase text-gray-900">TikTok Like &amp; Share</h5>
                                            <p className="text-[9px] text-gray-400 font-black uppercase">Engagement • ₦10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="block w-full text-center py-4 bg-gray-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-brand-red transition"
                            >
                                Explore All 1,200+ Jobs
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
