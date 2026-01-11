import Link from "next/link";
import { fundingOptionList, roadmapItems } from "../../src/lib/data";

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Process</p>
          <h1 className="text-3xl font-semibold">How Strata gets you funded</h1>
          <p className="text-white/70">A guided operating system that blends strategy, investor targets, and execution.</p>
        </div>
        <Link
          href="/apply"
          className="rounded-full bg-gradient-to-r from-brand-500 to-brand-300 px-5 py-3 text-sm font-semibold text-slate-950"
        >
          Start application
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {["Align", "Prepare", "Execute"].map((stage, idx) => (
          <div key={stage} className="glass rounded-2xl border border-white/10 p-5">
            <div className="text-xs uppercase tracking-wide text-brand-100">Step {idx + 1}</div>
            <h3 className="mt-2 text-lg font-semibold">{stage}</h3>
            <p className="mt-2 text-sm text-white/70">
              {idx === 0 && "Clarify funding route, target dilution, and control preferences."}
              {idx === 1 && "Tighten materials, readiness, and deal room with investor-grade quality."}
              {idx === 2 && "Sequence intros, track pipeline, and keep the roadmap moving."}
            </p>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl border border-white/10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Funding routes we evaluate together</h3>
            <p className="text-white/70">Match your control, dilution, and speed preferences.</p>
          </div>
          <Link href="/funding-options" className="text-sm font-semibold text-brand-100 underline">
            See options
          </Link>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {fundingOptionList.map((option) => (
            <div key={option.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm uppercase text-brand-100">{option.speed}</div>
              <div className="text-lg font-semibold">{option.name}</div>
              <p className="mt-2 text-sm text-white/70">{option.bestFor}</p>
              <p className="mt-2 text-sm text-white/80">Dilution: {option.dilution}</p>
              <p className="text-sm text-white/80">Control: {option.control}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Execution roadmap preview</h3>
          <Link href="/roadmap" className="text-sm text-brand-100 underline">
            Open roadmap
          </Link>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {roadmapItems.map((item) => (
            <div key={item.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{item.title}</span>
                <span className={`rounded-full px-3 py-1 text-xs ${item.completed ? "bg-emerald-500/20 text-emerald-100" : "bg-white/10 text-white/70"}`}>
                  {item.completed ? "Done" : `${item.durationWeeks} weeks`}
                </span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${item.completed ? "bg-emerald-400" : "bg-brand-400"}`}
                  style={{ width: item.completed ? "100%" : "60%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
