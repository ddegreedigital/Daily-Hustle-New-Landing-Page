export function RoadmapSection () {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">
          Speed to Market
        </h2>

        <h3 className="mb-16 text-3xl font-black uppercase leading-tight tracking-tighter text-gray-900 md:text-5xl">
          Campaign Execution{" "}
          <span className="text-brand-red">Roadmap</span>
        </h3>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="hustle-card !border-t-8 !border-t-gray-100 bg-white p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#c4162a]/10 hover:!border-[#BE123C]/20 hover:border-l-[#BE123C]/20 hover:!-translate-y-2">
            <div className="mb-6 text-2xl font-black text-brand-red">0h</div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-tight text-gray-900">
              Deposit &amp; Kickoff
            </h4>
            <p className="text-[11px] font-medium leading-relaxed text-gray-500">
              Budget confirmed and campaign logic designed by ops team.
            </p>
          </div>

          <div className="hustle-card scale-105 !border-t-8 hover:!border-t-[#BE123C]/20 bg-white p-10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#c4162a]/10 hover:border-[#BE123C]/20 hover:border-l-[#BE123C]/20 hover:scale-95">
            <div className="mb-6 text-2xl font-black text-brand-red">24h</div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-tight text-gray-900">
              Workforce Deployment
            </h4>
            <p className="text-[11px] font-medium leading-relaxed text-gray-500">
              Tasks live on the DailyHustle worker dashboard.
            </p>
          </div>

          <div className="hustle-card !border-t-8 !border-t-gray-100 bg-white p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#c4162a]/10 hover:!border-[#BE123C]/20 hover:border-l-[#BE123C]/20 hover:!-translate-y-2">
            <div className="mb-6 text-2xl font-black text-brand-red">72h</div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-tight text-gray-900">
              Velocity Spike
            </h4>
            <p className="text-[11px] font-medium leading-relaxed text-gray-500">
              Peak human engagement recorded; first proof audit available.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="inline-block rounded-2xl border border-red-100 bg-red-50 px-6 py-3">
            <p className="text-center text-xs font-black uppercase italic leading-relaxed tracking-widest text-brand-red">
              ⚡ Rush Setup Available:{" "}
              <span className="text-gray-900">
                For award voting or surprise drops, we can deploy within 24 hours
                for a surcharge.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};