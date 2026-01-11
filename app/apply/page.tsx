"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { company, fundingOptionList, readinessPercent } from "../../src/lib/data";

const steps = [
  {
    title: "Company snapshot",
    body: "Confirm your ARR, growth, and expansion markets so we can benchmark readiness.",
  },
  {
    title: "Funding preferences",
    body: "Share dilution targets and control preferences to shape your route.",
  },
  {
    title: "Timeline & goals",
    body: "Set desired close dates and priority milestones for this raise.",
  },
];

export default function ApplyPage() {
  const [current, setCurrent] = useState(0);
  const readiness = useMemo(() => readinessPercent(company.readiness), []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Application</p>
          <h1 className="text-3xl font-semibold">Growth-stage funding intake</h1>
          <p className="text-white/70">Takes less than 5 minutes. We preload what we know about you.</p>
        </div>
        <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
          Readiness baseline: <span className="text-white">{readiness}%</span>
        </div>
      </div>

      <div className="glass rounded-3xl border border-white/10 p-6 md:p-8">
        <div className="flex items-center justify-between text-sm text-white/70">
          <div>Step {current + 1} of {steps.length}</div>
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <div key={idx} className={`h-2 w-12 rounded-full ${idx <= current ? "bg-gradient-to-r from-brand-400 to-brand-200" : "bg-white/10"}`} />
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-3 md:w-2/3">
          <h2 className="text-2xl font-semibold">{steps[current].title}</h2>
          <p className="text-white/70">{steps[current].body}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
            <span className="text-white/70">ARR range</span>
            <input defaultValue={company.arrRange} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
            <span className="text-white/70">Primary markets</span>
            <input defaultValue={company.markets.join(", ")} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
            <span className="text-white/70">Preferred routes</span>
            <input defaultValue={company.preferredRoutes.join(", ")} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
            <span className="text-white/70">Target dilution</span>
            <input defaultValue={company.targetDilution} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2" />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {fundingOptionList.map((option) => (
            <span key={option.id} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
              {option.name}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 disabled:opacity-50"
            disabled={current === 0}
          >
            Back
          </button>
          {current === steps.length - 1 ? (
            <Link
              href="/dashboard"
              className="rounded-full bg-gradient-to-r from-brand-500 to-brand-300 px-6 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Submit & view dashboard
            </Link>
          ) : (
            <button
              onClick={() => setCurrent((prev) => Math.min(prev + 1, steps.length - 1))}
              className="rounded-full bg-gradient-to-r from-brand-500 to-brand-300 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
