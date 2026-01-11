"use client";

import { useState } from "react";
import { investorList, pipelineItems } from "../../src/lib/data";

export default function InvestorsPage() {
  const [pipeline, setPipeline] = useState(pipelineItems);

  const requestIntro = (investorId: string) => {
    if (pipeline.find((p) => p.investorId === investorId)) return;
    setPipeline([
      ...pipeline,
      { id: `p-${pipeline.length + 1}`, investorId, status: "Intro requested", lastUpdate: new Date().toISOString().slice(0, 10) },
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Investor universe</p>
          <h1 className="text-3xl font-semibold">Warm intros curated for your sector</h1>
          <p className="text-white/70">Click request intro to add to your pipeline.</p>
        </div>
        <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">Pipeline {pipeline.length}</div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {investorList.map((investor) => (
          <div key={investor.id} className="glass rounded-2xl border border-white/10 p-5">
            <div className="text-xs uppercase text-brand-100">{investor.type}</div>
            <div className="text-lg font-semibold">{investor.name}</div>
            <p className="mt-2 text-sm text-white/70">{investor.valueAdd}</p>
            <div className="mt-3 text-sm text-white/80">
              <div>Ticket: {investor.ticket}</div>
              <div>Sectors: {investor.sectors.join(", ")}</div>
              <div>Geo: {investor.geo.join(", ")}</div>
            </div>
            <button
              onClick={() => requestIntro(investor.id)}
              className="mt-4 w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-300 px-4 py-2 text-sm font-semibold text-slate-950 disabled:opacity-50"
              disabled={pipeline.some((p) => p.investorId === investor.id)}
            >
              {pipeline.some((p) => p.investorId === investor.id) ? "In pipeline" : "Request intro"}
            </button>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold">Pipeline status</h3>
        <div className="mt-3 space-y-2 text-sm text-white/80">
          {pipeline.map((item) => {
            const investor = investorList.find((i) => i.id === item.investorId);
            return (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                <div>
                  <div className="font-semibold">{investor?.name}</div>
                  <div className="text-xs text-white/60">{item.status}</div>
                </div>
                <div className="text-xs text-white/60">{item.lastUpdate}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
