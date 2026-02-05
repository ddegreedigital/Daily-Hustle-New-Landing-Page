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
// bg-white w-[540px] md:w-[352px] lg:w-[386px] flex-shrink-0 rounded-[2rem] p-10 flex flex-col justify-between
//                        border-[1.5px] border-[#f1f5f9] border-b-[8px] shadow-md relative
//                        hover:shadow-xl hover:-translate-y-2.5 transition-all duration-500
//    hover:border-[#c4162a]/20 hover:border-b-[#c4162a]/20
// }


"use client"

import { useCallback, useState } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";

const cards = [
    {
        title: "STARTUPS & SMES",
        price: "₦400,000",
        tag: "BASE CAMPAIGN",
        features: [
            "3k – 10k Completions",
            "Localized Targeting",
            "90%+ Completion Rate",
        ],
    },
    {
        title: "BRANDS & AGENCIES",
        price: "₦3,500,000",
        tag: "MANAGED PACKAGE",
        active_border: true,
        features: [
            "20k – 100k+ Engagements",
            "Geo & Demographic Targeting",
            "Real-time Dashboard",
        ],
    },
    {
        title: "MUSIC LABEL",
        price: "₦1,750,000",
        tag: "STRATEGY RELEASE",
        popular: true,
        features: [
            "Global Stream Uplift",
            "Massive Fan Sharing",
            "Viral Velocity Metrics",
        ],
    },
    {
        title: "Fintech & Web3",
        price: "₦750,000",
        tag: "Acquisition Sprint",
        active_border: true,
        features: [
            "Verified App Installs",
            "In-App Activity Proof",
            "CSV Performance Export",
        ],
    },
]

export function ManagedPlans() {
    const [index, setIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
        containScroll: "trimSnaps",
    });

    const visibleCards = 2
    const maxIndex = cards.length - visibleCards

    const prev = () =>
        setIndex((i) => Math.max(i - 1, 0))

    const next = () =>
        setIndex((i) => Math.min(i + 1, maxIndex))

    return (
        <section id="corporate" className="py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header row */}
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-[10px] font-black uppercase text-brand-red tracking-[0.4em] mb-4">
                            Strategic Managed Plans
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 leading-tight">
                            Industry <br />
                            <span className="text-brand-red">Verticals</span>
                        </h3>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={prev}
                            aria-label="Previous"
                            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition shadow-sm"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M15 19l-7-7 7-7"
                                    strokeWidth={3}
                                />
                            </svg>
                        </button>

                        <button
                            onClick={next}
                            aria-label="Next"
                            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition shadow-sm"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeWidth={3}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="relative overflow-hidden">
                    <motion.div
                        ref={emblaRef}
                        animate={{ x: -index * 568 }} // card width + gap
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="flex gap-8"
                    >
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                className={clsx(
                                    "bg-white md:w-[352px] lg:w-[386px] flex-shrink-0 rounded-[2rem] p-10 flex flex-col justify-between border-[1.5px] border-[#f1f5f9] border-b-[8px] shadow-md relative hover:shadow-xl hover:-translate-y-2.5 transition-all duration-500  hover:border-[#c4162a]/20 hover:border-b-[#c4162a]/20",
                                    card.active_border
                                        ? "border-b-gray-800"
                                        : "border-[#f1f5f9]"
                                )}
                            >
                                {/* Hot badge */}
                                {card.popular && (
                                    <span className="absolute top-6 right-6 bg-[#c4162a] text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Hot</span>
                                )}

                                <div>
                                    <h4 className="text-lg font-black uppercase mb-6 tracking-tight text-gray-800">
                                        {card.title}
                                    </h4>

                                    <p className="text-3xl font-black text-gray-900 mb-1">
                                        {card.price}
                                    </p>

                                    <p className="text-[9px] font-black uppercase text-[#c4162a] mb-8 tracking-widest italic">
                                        {card.tag}
                                    </p>

                                    <ul className="text-[11px] space-y-3 text-gray-500 font-bold">
                                        {card.features.map((f) => (
                                            <li key={f} className="flex gap-2">
                                                <span className="text-[#c4162a]">✓</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* <div className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-gray-950 p-10 sm:p-16 text-white shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red opacity-10 blur-3xl rounded-full" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h4 className="text-2xl font-black uppercase mb-4 tracking-tight text-[#BE123C]">
                                Pricing Transparency
                            </h4>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                *Our corporate pricing explicitly accounts for Other Costs of Engagement ensuring that the majority of your budget pays for real human actions.
                            </p>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-3">
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-brand-red font-black text-xl mb-1 tracking-tighter">
                                    15–25%
                                </p>
                                <p className="text-[8px] font-black uppercase text-gray-500 tracking-widest">
                                    Service Commission
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-brand-red font-black text-xl mb-1 tracking-tighter">
                                    1.5%
                                </p>
                                <p className="text-[8px] font-black uppercase text-gray-500 tracking-widest">
                                    Bank Transaction Fees
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-brand-red font-black text-xl mb-1 tracking-tighter">
                                    7.5%
                                </p>
                                <p className="text-[8px] font-black uppercase text-gray-500 tracking-widest">
                                    Standard VAT
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-brand-red font-black text-xl mb-1 tracking-tighter">
                                    FREE
                                </p>
                                <p className="text-[8px] font-black uppercase text-gray-500 tracking-widest">
                                    Anti-Fraud Audit
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-gray-950 p-10 sm:p-16 text-white shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red opacity-10 blur-3xl rounded-full"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 text-left">
                        <div className="lg:w-1/2">
                            <h4 className="text-2xl font-black uppercase mb-4 tracking-tight text-brand-red italic">
                                Pricing Transparency: Engagement Costs
                            </h4>

                            <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                *Our corporate pricing explicitly accounts for{" "}
                                <strong>Other Costs of Engagement</strong> including: Platform Service
                                Commissions (15% for entity, 25% for Commercial), Bank
                                Transaction/Switching Fees (1.5%), Anti-Fraud Verification Overhead, and
                                VAT. This ensures that the majority of your budget goes directly to paying
                                the Workforce for real actions.
                            </p>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-3">
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-brand-red font-black text-xl mb-1 tracking-tighter">
                                    15–25%
                                </p>
                                <p className="text-[8px] font-black uppercase text-gray-500 tracking-widest leading-tight">
                                    Service Commission
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-brand-red font-black text-xl mb-1 tracking-tighter">
                                    1.5%
                                </p>
                                <p className="text-[8px] font-black uppercase text-gray-500 tracking-widest leading-tight">
                                    Bank Fees
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
