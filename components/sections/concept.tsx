export function ConceptSection() {
    return (
        <section
            id="concept"
            className="relative border-y border-gray-100 bg-gray-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    {/* Left content */}
                    <div>
                        <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">
                            The Concept
                        </h2>

                        <h3 className="mb-8 text-3xl font-black uppercase leading-tight tracking-tighter text-gray-900 md:text-5xl">
                            Human-Powered <br />
                            Engagement{" "}
                            <span className="text-brand-red">Infrastructure</span>
                        </h3>

                        <p className="mb-10 text-lg font-medium leading-relaxed text-gray-600">
                            DailyHustle is a digital workforce platform developed by{" "}
                            <span className="font-bold text-brand-red">
                                D-Degree Digital Hub
                            </span>
                            . We bridge the gap between digital content and real human
                            interaction.
                        </p>

                        <div className="bg-white rounded-[2rem] border border-[#f1f5f9] transition-all duration-500 border-l-8 shadow-2xl hover:shadow-[#c4162a]/10 hover:border-[#BE123C]/20 hover:border-l-[#BE123C]/20 hover:!-translate-y-2 bg-white p-8">
                            <h4 className="mb-4 text-sm font-black uppercase italic text-gray-900">
                                The Proof-of-Work Model
                            </h4>

                            <p className="mb-6 text-sm font-medium leading-relaxed text-gray-500">
                                Unlike traditional ads, our &quot;workers&quot; perform
                                specific, trackable actions (follows, streams, saves) and submit
                                visual proof. This ensures 100% human engagement prioritized by
                                platform algorithms.
                            </p>

                            <div className="flex items-center space-x-3 text-brand-red">
                                <span className="text-xl">📍</span>
                                <p className="text-xs font-black uppercase tracking-widest leading-tight">
                                    Hyper-Local Targeting:{" "}
                                    <span className="text-gray-900">
                                        Deploy tasks specifically in Lagos, Abuja, or any Nigerian
                                        region.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right stats grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="bg-white rounded-[2rem] border border-[#f1f5f9] transition-all duration-500 flex flex-col justify-center bg-white p-8 text-center hover:shadow-2xl hover:shadow-[#c4162a]/10 hover:border-[#BE123C]/20 hover:border-l-[#BE123C]/20 hover:!-translate-y-2">
                            <p className="mb-2 text-xs font-black uppercase text-gray-400">
                                Verified Human Rate
                            </p>
                            <p className="text-4xl font-black text-gray-900">100%</p>
                        </div>

                        <div className="bg-white rounded-[2rem] border border-[#f1f5f9] transition-all duration-500 flex flex-col justify-center bg-white p-8 text-center hover:shadow-2xl hover:shadow-[#c4162a]/10 hover:border-[#BE123C]/20 hover:border-l-[#BE123C]/20 hover:!-translate-y-2">
                            <p className="mb-2 text-xs font-black uppercase text-gray-400">
                                Fraud Detection
                            </p>
                            <p className="text-4xl font-black text-gray-900">99.8%</p>
                        </div>

                        <div className="bg-white rounded-[2rem] border border-[#f1f5f9] transition-all duration-500 flex flex-col justify-center bg-white p-8 text-center hover:shadow-2xl hover:shadow-[#c4162a]/10 hover:border-[#BE123C]/20 hover:border-l-[#BE123C]/20 hover:!-translate-y-2">
                            <p className="mb-2 text-xs font-black uppercase text-gray-400">
                                Submission Accuracy
                            </p>
                            <p className="text-4xl font-black text-gray-900">100%</p>
                        </div>

                        <div className="rounded-[2rem] border border-[#f1f5f9] transition-all duration-500 flex flex-col justify-center bg-gray-900 p-8 hover:shadow-2xl hover:shadow-[#c4162a]/10 hover:border-[#BE123C]/20 hover:border-l-[#BE123C]/20 hover:!-translate-y-2">
                            <p className="mb-4 text-[9px] font-black uppercase tracking-widest text-brand-red">
                                Proof Deliverables
                            </p>
                            <ul className="space-y-2 text-left text-[10px] font-bold text-gray-400">
                                <li>• Task Verification Screenshots</li>
                                <li>• Active Geographic Data</li>
                                <li>• Engagement counts per platform</li>
                                <li>• CSV Performance Reports</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};