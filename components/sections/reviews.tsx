"use client"

import { useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const reviews = [
    {
        text: "I earned my first 15k just by following brands and installing apps. Payouts are truly instant!",
        name: "Amaka O.",
        role: "Worker • Lagos",
        image:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
    },
    {
        text: "The app installs were real and verified. A massive game changer for our fintech brand growth.",
        name: "Tunde W.",
        role: "Employer • Ibadan",
        image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
    },
    {
        text: "DailyHustle covers my transport costs every week. Simple tasks that pay real money.",
        name: "Chidi E.",
        role: "Worker • Abuja",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=150&q=80",
    },
    {
        text: "We boosted our artist's Spotify presence in 48 hours. The model is unmatched.",
        name: "Ayo B.",
        role: "Label Exec • Lagos",
        image:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
    },
    {
        text: "DailyHustle is my reliable side hustle. I love the transparency of the dashboard.",
        name: "Blessing J.",
        role: "Worker • P.H.",
        image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
    },
];

export function Review() {
    const autoplay = useRef(
        Autoplay({
            delay: 3500,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
        })
    )

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            skipSnaps: false,
            dragFree: false,
        },
        [autoplay.current]
    )

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[10px] font-black uppercase text-brand-red tracking-[0.4em] mb-4">
                        Community Voice
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                        Trust <span className="text-brand-red">Stories</span>
                    </h3>
                </div>

                <div className="relative">
                    {/* edge fade */}
                    <div className="pointer-events-none absolute inset-0 z-10" />

                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex gap-8 py-6">
                            {[...reviews, ...reviews].map((review, index) => (
                                <div
                                    key={index}
                                    className="snap-center shrink-0 w-[320px] md:w-[386px] !rounded-[2rem] shadow-md relative hover:shadow-xl hover:shadow-[#c4162a]/20 transition-shadow duration-300 will-change-transform hover:border-[#c4162a]/20 p-8 h-full flex flex-col justify-between border hover:border-2 border-gray-100"
                                >
                                    <div>
                                        <div className="flex items-center space-x-1 text-yellow-400 mb-6 text-xs">
                                            ★★★★★
                                        </div>
                                        <p className="text-[14px] text-gray-600 font-medium italic leading-relaxed mb-8">
                                            "{review.text}"
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                                        <img
                                            src={review.image}
                                            className="w-10 h-10 rounded-full object-cover grayscale"
                                            alt={review.name}
                                        />
                                        <div>
                                            <h5 className="text-xs font-black uppercase text-gray-900">
                                                {review.name}
                                            </h5>
                                            <p className="text-[8px] font-black text-brand-red uppercase tracking-widest">
                                                {review.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
