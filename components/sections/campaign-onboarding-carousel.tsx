// "use client"

// import { motion } from "framer-motion"

// const steps = [
//   {
//     title: "Create Campaign",
//     desc: "Set your campaign goals, budget, and target audience in minutes.",
//     step: "01",
//   },
//   {
//     title: "Select Workers",
//     desc: "Choose from thousands of verified DailyHustle workers.",
//     step: "02",
//   },
//   {
//     title: "Launch & Track",
//     desc: "Go live instantly and monitor performance in real time.",
//     step: "03",
//   },
//   {
//     title: "Approve Tasks",
//     desc: "Review completed work and approve with one click.",
//     step: "04",
//   },
//   {
//     title: "Instant Payouts",
//     desc: "Workers get paid immediately once tasks are approved.",
//     step: "05",
//   },
// ]

// export function CampaignOnboardingCarousel() {
//   return (
//     <section className="relative overflow-hidden py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Header */}
//         <div className="mb-14 max-w-xl">
//           <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1 text-xs font-medium text-[color:var(--brand-red)]">
//             SIMPLE & FAST
//           </span>

//           <h2 className="text-4xl font-extrabold leading-tight">
//             Campaign Onboarding
//             <br />
//             <span className="text-[color:var(--brand-red)]">Process</span>
//           </h2>

//           <p className="mt-4 text-neutral-600">
//             Launch campaigns effortlessly and start getting results the same day.
//           </p>
//         </div>

//         {/* Carousel */}
//         <motion.div
//           className="relative"
//           whileTap={{ cursor: "grabbing" }}
//         >
//           <motion.div
//             drag="x"
//             dragConstraints={{ left: -((steps.length - 1) * 340), right: 0 }}
//             className="flex gap-6"
//           >
//             {steps.map((item) => (
//               <motion.div
//                 key={item.step}
//                 whileHover={{ y: -6 }}
//                 className="min-w-[300px] max-w-[300px] rounded-[24px] bg-white p-6 shadow-[var(--shadow-soft)]"
//               >
//                 <div className="mb-6 flex items-center justify-between">
//                   <span className="text-xs font-semibold text-black/40">
//                     STEP {item.step}
//                   </span>
//                   <span className="grid h-9 w-9 place-items-center rounded-xl bg-red-50 text-sm font-bold text-[color:var(--brand-red)]">
//                     {item.step}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-bold">{item.title}</h3>

//                 <p className="mt-3 text-sm leading-6 text-neutral-600">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Hint */}
//         <p className="mt-6 text-xs text-neutral-400">
//           ← Drag to explore steps →
//         </p>
//       </div>
//     </section>
//   )
// }


// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// const steps = [
//   {
//     title: "Create Campaign",
//     desc: "Set your campaign goals and budget in minutes.",
//   },
//   {
//     title: "Select Workers",
//     desc: "Choose from thousands of verified workers.",
//   },
//   {
//     title: "Launch Campaign",
//     desc: "Go live instantly and start receiving results.",
//   },
//   {
//     title: "Approve Tasks",
//     desc: "Review and approve completed tasks easily.",
//   },
// ]

// export function CampaignOnboardingCarousel() {
//   const [index, setIndex] = useState(0)

//   const prev = () =>
//     setIndex((i) => (i === 0 ? steps.length - 1 : i - 1))
//   const next = () =>
//     setIndex((i) => (i === steps.length - 1 ? 0 : i + 1))

//   return (
//     <section className="relative py-28 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Header */}
//         <div className="mb-16 max-w-xl">
//           <h2 className="text-4xl font-extrabold leading-tight">
//             Campaign Onboarding
//             <br />
//             <span className="text-brand-red">Process</span>
//           </h2>

//           <p className="mt-4 text-neutral-600">
//             Launch campaigns effortlessly in just a few simple steps.
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           {/* Cards */}
//           <div className="relative h-[260px] overflow-hidden">
//             <AnimatePresence initial={false}>
//               <motion.div
//                 key={index}
//                 initial={{ x: 120, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -120, opacity: 0 }}
//                 transition={{ duration: 0.45, ease: "easeOut" }}
//                 className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-soft"
//               >
//                 <span className="mb-4 inline-block text-sm font-semibold text-brand-red">
//                   STEP {index + 1}
//                 </span>

//                 <h3 className="text-xl font-bold">{steps[index].title}</h3>

//                 <p className="mt-3 text-neutral-600">
//                   {steps[index].desc}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Arrows */}
//           <div className="mt-10 flex items-center justify-center gap-6">
//             <button
//               onClick={prev}
//               className="grid h-12 w-12 place-items-center rounded-full border border-neutral-200 hover:bg-neutral-50 transition"
//             >
//               ←
//             </button>

//             <button
//               onClick={next}
//               className="grid h-12 w-12 place-items-center rounded-full border border-neutral-200 hover:bg-neutral-50 transition"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const cards = [
    {
        title: "STARTUPS & SMES",
        price: "₦150,000",
        tag: "BASE CAMPAIGN",
        features: [
            "3k – 10k Completions",
            "Localized Targeting",
            "90%+ Completion Rate",
        ],
    },
    {
        title: "BRANDS & AGENCIES",
        price: "₦500,000",
        tag: "MANAGED PACKAGE",
        features: [
            "20k – 100k+ Engagements",
            "Geo & Demographic Targeting",
            "Real-time Dashboard",
        ],
    },
    {
        title: "MUSIC LABEL",
        price: "₦300,000",
        tag: "STRATEGY RELEASE",
        popular: true,
        features: [
            "Global Stream Uplift",
            "Massive Fan Sharing",
            "Viral Velocity Metrics",
        ],
    },
]

export function CampaignOnboardingCarousel() {
    const [index, setIndex] = useState(0)

    const prev = () => setIndex((i) => Math.max(i - 1, 0))
    const next = () =>
        setIndex((i) => Math.min(i + 1, cards.length - 3))

    return (
        <section
            id="onboarding"
            className="py-24 bg-gray-950 text-white relative overflow-hidden"
        >
            <div
                className="absolute top-0 left-0 w-full h-full opacity-10"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/cubes.png')",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-[10px] font-black uppercase text-brand-red tracking-[0.4em] mb-4">
                    Strategic Workflow
                </h2>

                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-16 leading-tight">
                    Campaign <span className="text-brand-red">Onboarding Process</span>
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-red transition">
                        <div className="text-2xl mb-6">📝</div>
                        <h4 className="text-xs font-black uppercase mb-3 tracking-tight">
                            01. Strategy
                        </h4>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                            Task logic design to eliminate fraud and maximize specific engagement
                            goals.
                        </p>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-red transition">
                        <div className="text-2xl mb-6">🖋️</div>
                        <h4 className="text-xs font-black uppercase mb-3 tracking-tight">
                            02. SLA Contract
                        </h4>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                            Legal frameworks covering completion timelines and data protection
                            compliance.
                        </p>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-red transition">
                        <div className="text-2xl mb-6">🛡️</div>
                        <h4 className="text-xs font-black uppercase mb-3 tracking-tight">
                            03. Managed Launch
                        </h4>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                            24/7 monitoring of proof submissions by our specialized quality
                            control team.
                        </p>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-red transition">
                        <div className="text-2xl mb-6">📈</div>
                        <h4 className="text-xs font-black uppercase mb-3 tracking-tight">
                            04. Audit &amp; Report
                        </h4>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                            Full CSV transparency. Pay only for tasks that pass our rigorous
                            anti-fraud audit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
