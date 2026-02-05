import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white py-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
                            <div className="w-6 h-6 bg-brand-red rounded flex items-center justify-center shadow shadow-red-100">
                                <span className="text-white font-black text-[9px]">DH</span>
                            </div>
                            <h4 className="text-lg font-black text-brand-red tracking-tighter uppercase italic">
                                DailyHustle
                            </h4>
                        </div>

                        <p className="text-gray-400 text-[11px] leading-relaxed max-w-xs mx-auto lg:mx-0 font-medium">
                            Nigeria’s premier engagement infrastructure connecting verified people
                            with growing brands.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-black uppercase mb-6 tracking-widest text-gray-900">
                            Support
                        </h5>
                        <ul className="space-y-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">
                            <li>
                                <Link href="/contract-slas" className="hover:text-brand-red transition">
                                    Contract SLAs
                                </Link>
                            </li>
                            <li>
                                <a href="/verified-payouts" className="hover:text-brand-red transition">
                                    Verified Payouts
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-black uppercase mb-6 tracking-widest text-gray-900">
                            Company
                        </h5>
                        <ul className="space-y-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">
                            <li>
                                <Link href="/terms-of-service" className="hover:text-brand-red transition">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-brand-red transition">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-black uppercase mb-6 tracking-widest text-gray-900">
                            Contact
                        </h5>
                        <p className="text-[11px] font-bold text-gray-400 mb-2 italic">
                            D-Degree Digital Hub
                        </p>
                        <a
                            href="mailto:info@dailyhustle.fun"
                            className="text-brand-red font-black text-sm hover:underline"
                        >
                            info@dailyhustle.fun
                        </a>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-100 text-center">
                    <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em]">
                        © 2025 DAILYHUSTLE • SCALE YOUR IMPACT
                    </p>
                </div>
            </div>
        </footer>

    )
}