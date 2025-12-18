import { company, pipelineItems, readinessPercent, roadmapItems } from "../../src/lib/data";

export default function StatusPage() {
  const readiness = readinessPercent(company.readiness);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Status</p>
          <h1 className="text-3xl font-semibold">Raise readiness & momentum</h1>
          <p className="text-white/70">Signals from roadmap, documents, and investor pipeline.</p>
        </div>
        <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">{readiness}% ready</div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl border border-white/10 p-4">
          <h3 className="text-lg font-semibold">Roadmap</h3>
          <p className="text-sm text-white/70">{roadmapItems.filter((i) => i.completed).length} completed milestones.</p>
        </div>
        <div className="glass rounded-2xl border border-white/10 p-4">
          <h3 className="text-lg font-semibold">Pipeline</h3>
          <p className="text-sm text-white/70">{pipelineItems.length} investors engaged.</p>
        </div>
        <div className="glass rounded-2xl border border-white/10 p-4">
          <h3 className="text-lg font-semibold">Control profile</h3>
          <p className="text-sm text-white/70">Target dilution {company.targetDilution} with founder-led control.</p>
        </div>
      </div>

      <div className="glass rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold">Investor timeline</h3>
        <div className="mt-3 space-y-2 text-sm text-white/80">
          {pipelineItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2">
              <span>{item.status}</span>
              <span className="text-xs text-white/60">{item.lastUpdate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
