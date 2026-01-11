import Link from "next/link";
import { company, documentList, investorList, notificationList, pipelineItems, readinessPercent, roadmapItems } from "../../src/lib/data";

export default function DashboardPage() {
  const readiness = readinessPercent(company.readiness);
  const outstandingDocs = documentList.filter((doc) => doc.status !== "Uploaded");
  const nextRoadmap = roadmapItems.find((item) => !item.completed);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Dashboard</p>
          <h1 className="text-3xl font-semibold">Welcome back, {company.name}</h1>
          <p className="text-white/70">Track readiness, options, and investor momentum.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
          Readiness {readiness}%
          <div className="mt-2 h-2 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-200" style={{ width: `${readiness}%` }} />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {notificationList.map((n) => (
          <div key={n.id} className="glass rounded-2xl border border-white/10 p-4">
            <div className="text-xs uppercase tracking-wide text-brand-100">{n.type}</div>
            <div className="text-lg font-semibold">{n.text}</div>
            <Link href={n.type === "action" ? "/funding-options" : "/messages"} className="mt-3 inline-flex text-sm text-brand-100 underline">
              View
            </Link>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl border border-white/10 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Company profile</h3>
            <Link href="/company" className="text-sm text-brand-100 underline">
              Edit
            </Link>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Sector: {company.sector}</li>
            <li>Markets: {company.markets.join(", ")}</li>
            <li>Funding target: ${company.fundingTarget.toLocaleString()}</li>
          </ul>
        </div>
        <div className="glass rounded-2xl border border-white/10 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Roadmap</h3>
            <Link href="/roadmap" className="text-sm text-brand-100 underline">
              Open
            </Link>
          </div>
          <p className="mt-2 text-white/70">{nextRoadmap ? nextRoadmap.title : "All milestones completed"}</p>
          <div className="mt-3 space-y-2 text-sm text-white/80">
            {roadmapItems.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <span>{item.title}</span>
                <span className={`text-xs ${item.completed ? "text-emerald-300" : "text-brand-100"}`}>
                  {item.completed ? "Done" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl border border-white/10 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Investors pipeline</h3>
            <Link href="/investors" className="text-sm text-brand-100 underline">
              Manage
            </Link>
          </div>
          <div className="mt-3 space-y-2 text-sm text-white/80">
            {pipelineItems.map((item) => {
              const investor = investorList.find((i) => i.id === item.investorId);
              return (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-2">
                  <div>
                    <div className="font-semibold">{investor?.name}</div>
                    <div className="text-xs text-white/60">{item.status}</div>
                  </div>
                  <div className="text-xs text-white/60">Updated {item.lastUpdate}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="glass rounded-2xl border border-white/10 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Deal room documents</h3>
            <Link href="/deal-room" className="text-sm text-brand-100 underline">
              Open
            </Link>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/80">
            {documentList.map((doc) => (
              <div key={doc.id} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="font-semibold">{doc.name}</div>
                <div className="text-xs text-white/60">{doc.type}</div>
                <div className={`text-xs ${doc.status === "Uploaded" ? "text-emerald-200" : "text-amber-200"}`}>{doc.status}</div>
              </div>
            ))}
          </div>
          {outstandingDocs.length > 0 && (
            <p className="mt-3 text-xs text-amber-200">{outstandingDocs.length} items need attention.</p>
          )}
        </div>
      </div>
    </div>
  );
}
