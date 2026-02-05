"use client"

export function CorporatePackage() {
    const moveCarousel = (trackId: string, direction: number) => {
        console.log(trackId, direction);
    };
    return (
        <section id="corporate" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
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
                            onClick={() => moveCarousel("corpTrack", -1)}
                            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition shadow-sm"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15 19l-7-7 7-7" strokeWidth={3} />
                            </svg>
                        </button>

                        <button
                            onClick={() => moveCarousel("corpTrack", 1)}
                            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition shadow-sm"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 5l7 7-7 7" strokeWidth={3} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="carousel-container multi-item">
                    <div
                        id="corpTrack"
                        className="carousel-track"
                        style={{ transform: "translateX(0px)" }}
                    >
                        {/* STARTUPS & SMEs */}
                        <div className="carousel-item">
                            <div className="hustle-card p-10 h-full flex flex-col justify-between border-b-8 border-b-gray-100">
                                <div>
                                    <h4 className="text-lg font-black uppercase mb-6 tracking-tight text-gray-800">
                                        Startups &amp; SMEs
                                    </h4>
                                    <p className="text-3xl font-black text-gray-900 mb-1">
                                        ₦150,000
                                    </p>
                                    <p className="text-[9px] font-black uppercase text-brand-red mb-8 tracking-widest italic">
                                        Base Campaign
                                    </p>
                                    <ul className="text-[11px] space-y-3 text-gray-500 font-bold">
                                        <li>✓ 3k – 10k Completions</li>
                                        <li>✓ Localized Targeting</li>
                                        <li>✓ 90%+ Completion Rate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* BRANDS & AGENCIES */}
                        <div className="carousel-item">
                            <div className="hustle-card p-10 h-full flex flex-col justify-between border-b-8 border-b-gray-900">
                                <div>
                                    <h4 className="text-lg font-black uppercase mb-6 tracking-tight text-gray-800">
                                        Brands &amp; Agencies
                                    </h4>
                                    <p className="text-3xl font-black text-gray-900 mb-1">
                                        ₦500,000
                                    </p>
                                    <p className="text-[9px] font-black uppercase text-brand-red mb-8 tracking-widest italic">
                                        Managed Package
                                    </p>
                                    <ul className="text-[11px] space-y-3 text-gray-500 font-bold">
                                        <li>✓ 20k – 100k+ Engagements</li>
                                        <li>✓ Geo &amp; Demographic Targeting</li>
                                        <li>✓ Real-time Dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* MUSIC */}
                        <div className="carousel-item">
                            <div className="hustle-card p-10 h-full flex flex-col justify-between border-b-8 border-b-brand-red relative">
                                <span className="absolute top-6 right-6 bg-brand-red text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                    Popular
                                </span>
                                <div>
                                    <h4 className="text-lg font-black uppercase mb-6 tracking-tight text-brand-red">
                                        Music Label 🎵
                                    </h4>
                                    <p className="text-3xl font-black text-gray-900 mb-1">
                                        ₦300,000
                                    </p>
                                    <p className="text-[9px] font-black uppercase text-brand-red mb-8 tracking-widest italic">
                                        Strategy Release
                                    </p>
                                    <ul className="text-[11px] space-y-3 text-gray-500 font-bold">
                                        <li>✓ Global Stream Uplift</li>
                                        <li>✓ Massive Fan Sharing</li>
                                        <li>✓ Viral Velocity Metrics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FINTECH */}
                        <div className="carousel-item">
                            <div className="hustle-card p-10 h-full flex flex-col justify-between border-b-8 border-b-gray-900">
                                <div>
                                    <h4 className="text-lg font-black uppercase mb-6 tracking-tight text-gray-800">
                                        Fintech &amp; Web3
                                    </h4>
                                    <p className="text-3xl font-black text-gray-900 mb-1">
                                        ₦750,000
                                    </p>
                                    <p className="text-[9px] font-black uppercase text-brand-red mb-8 tracking-widest italic">
                                        Acquisition Sprint
                                    </p>
                                    <ul className="text-[11px] space-y-3 text-gray-500 font-bold">
                                        <li>✓ Verified App Installs</li>
                                        <li>✓ In-App Activity Proof</li>
                                        <li>✓ CSV Performance Export</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* NGOs */}
                        <div className="carousel-item">
                            <div className="hustle-card p-10 h-full flex flex-col justify-between border-b-8 border-b-gray-100">
                                <div>
                                    <h4 className="text-lg font-black uppercase mb-6 tracking-tight text-gray-800">
                                        NGOs &amp; Impact
                                    </h4>
                                    <p className="text-3xl font-black text-gray-900 mb-1">
                                        ₦200,000
                                    </p>
                                    <p className="text-[9px] font-black uppercase text-brand-red mb-8 tracking-widest italic">
                                        Social Enterprise
                                    </p>
                                    <ul className="text-[11px] space-y-3 text-gray-500 font-bold">
                                        <li>✓ Survey Awareness Actions</li>
                                        <li>✓ Geo-based Participation</li>
                                        <li>✓ Impact Metric Reports</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* POLITICAL */}
                        <div className="carousel-item">
                            <div className="hustle-card p-10 h-full flex flex-col justify-between border-b-8 border-b-gray-900">
                                <div>
                                    <h4 className="text-lg font-black uppercase mb-6 tracking-tight text-gray-800">
                                        Political Orgs
                                    </h4>
                                    <p className="text-3xl font-black text-gray-900 mb-1">
                                        ₦1,000,000
                                    </p>
                                    <p className="text-[9px] font-black uppercase text-brand-red mb-8 tracking-widest italic">
                                        Mobilization Drive
                                    </p>
                                    <ul className="text-[11px] space-y-3 text-gray-500 font-bold">
                                        <li>✓ Ward &amp; LGA Mobilization</li>
                                        <li>✓ Content Distribution Proof</li>
                                        <li>✓ Engagement Heatmaps</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAITH-BASED */}
                        <div className="carousel-item">
                            <div className="hustle-card p-10 h-full flex flex-col justify-between border-b-8 border-b-gray-100">
                                <div>
                                    <h4 className="text-lg font-black uppercase mb-6 tracking-tight text-gray-800">
                                        Faith-Based
                                    </h4>
                                    <p className="text-3xl font-black text-gray-900 mb-1">
                                        ₦150,000
                                    </p>
                                    <p className="text-[9px] font-black uppercase text-brand-red mb-8 tracking-widest italic">
                                        Event Support
                                    </p>
                                    <ul className="text-[11px] space-y-3 text-gray-500 font-bold">
                                        <li>✓ Livestream Engagement</li>
                                        <li>✓ Attendance Confirmations</li>
                                        <li>✓ Community Reach Reports</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transparency Board */}
                <div className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-gray-950 p-10 sm:p-16 text-white shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red opacity-10 blur-3xl rounded-full" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h4 className="text-2xl font-black uppercase mb-4 tracking-tight">
                                Pricing Transparency
                            </h4>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                Our pricing accounts for all costs ensuring the majority of your
                                budget pays for real human actions.
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
                </div>
            </div>
        </section>
    );
};
