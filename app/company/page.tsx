import { company, readinessPercent } from "../../src/lib/data";

export default function CompanyPage() {
  const readiness = readinessPercent(company.readiness);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Profile</p>
          <h1 className="text-3xl font-semibold">{company.name}</h1>
          <p className="text-white/70">{company.pitchSummary}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
          Readiness {readiness}%
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl border border-white/10 p-5">
          <h3 className="text-lg font-semibold">Core</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Country: {company.country}</li>
            <li>Stage: {company.stage}</li>
            <li>Sector: {company.sector}</li>
            <li>ARR: {company.arrRange}</li>
            <li>YoY: {company.growthYoY}</li>
          </ul>
        </div>
        <div className="glass rounded-2xl border border-white/10 p-5">
          <h3 className="text-lg font-semibold">Expansion</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Markets: {company.markets.join(", ")}</li>
            <li>Team size: {company.teamSize}</li>
            <li>Website: <a href={company.website} className="text-brand-100 underline">{company.website}</a></li>
          </ul>
        </div>
        <div className="glass rounded-2xl border border-white/10 p-5">
          <h3 className="text-lg font-semibold">Funding preferences</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Target: ${company.fundingTarget.toLocaleString()}</li>
            <li>Dilution: {company.targetDilution}</li>
            <li>Preferred routes: {company.preferredRoutes.join(", ")}</li>
          </ul>
        </div>
      </div>
      <div className="glass rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold">Readiness checklist</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-5">
          {Object.entries(company.readiness).map(([key, done]) => (
            <div key={key} className={`rounded-xl border p-3 text-sm capitalize ${done ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-50" : "border-white/10 bg-white/5 text-white"}`}>
              {key.replace(/([A-Z])/g, " $1")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
