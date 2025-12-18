import { roadmapItems } from "../../src/lib/data";

export default function RoadmapPage() {
  const totalWeeks = roadmapItems.reduce((acc, item) => acc + item.durationWeeks, 0);
  const completed = roadmapItems.filter((item) => item.completed).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Execution</p>
          <h1 className="text-3xl font-semibold">Funding roadmap</h1>
          <p className="text-white/70">Sequenced steps with expected time to close.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
          {completed} / {roadmapItems.length} completed
        </div>
      </div>

      <div className="glass rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Total timeline</span>
          <span>{totalWeeks} weeks</span>
        </div>
        <div className="mt-3 space-y-3">
          {roadmapItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${item.completed ? "bg-emerald-500/20 text-emerald-100" : "bg-brand-500/20 text-brand-50"}`}>
                {item.durationWeeks}w
              </div>
              <div className="flex-1">
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs text-white/60">{item.completed ? "Complete" : "In progress"}</div>
              </div>
              <div className="h-2 w-24 rounded-full bg-white/10">
                <div className={`h-full rounded-full ${item.completed ? "bg-emerald-300" : "bg-brand-400"}`} style={{ width: item.completed ? "100%" : "70%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
