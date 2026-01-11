import Link from "next/link";
import { company, fundingOptionList, readinessPercent, roadmapItems } from "../src/lib/data";

export default function HomePage() {
  const readiness = readinessPercent(company.readiness);
  const nextStep = roadmapItems.find((item) => !item.completed);

  return (
    <div className="space-y-10">
      <section className="glass card-shadow rounded-3xl border border-white/10 p-8 shadow-2xl md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6 md:w-2/3">
            <p className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-100">
              Founder-first funding OS
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Built for growth-stage founders raising <span className="text-gradient">$50K–$20M</span>
            </h1>
            <p className="text-lg text-white/80">
              Strata brings funding routes, investor targets, deal-room readiness, and execution roadmap into one
              transparent workspace.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <span className="rounded-full bg-white/10 px-3 py-1">Control-first</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Non-dilutive friendly</span>
              <span className="rounded-full bg-white/10 px-3 py-1">International expansion</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/apply"
                className="rounded-full bg-gradient-to-r from-brand-500 to-brand-300 px-6 py-3 text-center text-base font-semibold text-slate-950 shadow-lg transition hover:from-brand-400 hover:to-brand-200"
              >
                Start your application
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white/80 transition hover:border-brand-300 hover:text-white"
              >
                How Strata works
              </Link>
            </div>
          </div>
          <div className="glass card-shadow flex flex-col gap-4 rounded-2xl p-6 text-sm text-white/80 md:w-1/3">
            <div className="flex items-center justify-between text-white">
              <span className="font-semibold">Readiness</span>
              <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-100">Live</span>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-xs text-white/70">
                <span>Completion</span>
                <span>{readiness}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-200" style={{ width: `${readiness}%` }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(company.readiness).map(([key, done]) => (
                <div
                  key={key}
                  className={`rounded-xl border px-3 py-2 text-xs capitalize ${done ? "border-brand-400/50 bg-brand-500/10 text-white" : "border-white/10 bg-white/5"}`}
                >
                  {key.replace(/([A-Z])/g, " $1")}
                </div>
              ))}
            </div>
            {nextStep && (
              <div className="rounded-xl bg-white/5 p-3 text-xs">
                <div className="text-white">Next recommended step</div>
                <div className="text-white/80">{nextStep.title}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {fundingOptionList.map((option) => (
          <div key={option.id} className="glass rounded-2xl border border-white/10 p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{option.name}</h3>
              <span className="text-xs uppercase tracking-wide text-brand-100">{option.speed}</span>
            </div>
            <p className="mt-3 text-sm text-white/70">{option.bestFor}</p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <div>Control: {option.control}</div>
              <div>Dilution: {option.dilution}</div>
              <div>Cost: {option.cost}</div>
            </div>
            <Link href="/funding-options" className="mt-4 inline-flex text-sm text-brand-100 underline">
              Explore route
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
