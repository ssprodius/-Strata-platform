import Link from "next/link";
import { company, fundingOptionList } from "../../src/lib/data";

export default function FundingOptionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Funding routes</p>
          <h1 className="text-3xl font-semibold">Choose the path that fits {company.targetDilution} dilution</h1>
          <p className="text-white/70">Strata scores routes based on control, cost, and speed.</p>
        </div>
        <Link href="/roadmap" className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
          Send to roadmap
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {fundingOptionList.map((option) => (
          <div key={option.id} className="glass rounded-2xl border border-white/10 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{option.name}</h3>
              <span className="text-xs uppercase text-brand-100">{option.speed}</span>
            </div>
            <p className="mt-2 text-sm text-white/70">{option.bestFor}</p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>Control: {option.control}</p>
              <p>Dilution: {option.dilution}</p>
              <p>Cost: {option.cost}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Link href="/roadmap" className="text-sm text-brand-100 underline">
                Add step
              </Link>
              <Link href="/investors" className="text-sm text-brand-100 underline">
                Find backers
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
