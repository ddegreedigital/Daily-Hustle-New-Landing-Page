"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"
import Link from "next/link"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={clsx(
                "sticky top-0 z-50 transition-all",
                scrolled
                    ? "bg-white/80 backdrop-blur-md"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto max-w-7xl px-6 h-[76px] flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    {/* simple logo badge */}
                    <div className="h-9 w-9 rounded-xl bg-[color:var(--brand-red)] text-white grid place-items-center text-sm font-bold">
                        DH
                    </div>
                    <span className="font-extrabold tracking-tight text-[18px]">
                        DAILYHUSTLE
                    </span>
                </div>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-10 text-[13px] text-black/60">
                    <Link href="#earn" className="hover:text-black transition">Earn</Link>
                    <Link href="#onboarding" className="hover:text-black transition">Process</Link>
                    <Link href="#corporate" className="hover:text-black transition">Corporate</Link>
                    <Link href="#reviews" className="hover:text-black transition">Reviews</Link>
                </nav>

                {/* Right */}
                <div className="flex items-center gap-5">
                    <Link href="https://workers.dailyhustle.fun/login" className="hidden md:inline text-[13px] text-black/60 hover:text-black transition">
                        Login
                    </Link>

                    <Link href="https://workers.dailyhustle.fun/" className="rounded-full bg-[color:var(--brand-red)] px-6 py-2.5 text-white text-[13px] font-semibold shadow-[var(--shadow-soft)]">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    )
}
