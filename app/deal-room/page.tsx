"use client";

import { useState } from "react";
import { documentList } from "../../src/lib/data";

export default function DealRoomPage() {
  const [docs, setDocs] = useState(documentList);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("Financial");

  const addDocument = () => {
    if (!newName.trim()) return;
    setDocs([
      ...docs,
      { id: `d-${docs.length + 1}`, type: newType, name: newName, status: "Draft" },
    ]);
    setNewName("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Deal room</p>
          <h1 className="text-3xl font-semibold">Investor-ready documents</h1>
          <p className="text-white/70">Upload UI only; no files stored.</p>
        </div>
        <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">{docs.length} items</div>
      </div>

      <div className="glass rounded-2xl border border-white/10 p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <label className="text-sm text-white/70">Document name</label>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm"
              placeholder="Investor update Q4"
            />
          </div>
          <div>
            <label className="text-sm text-white/70">Type</label>
            <select
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm"
            >
              {Array.from(new Set(documentList.map((d) => d.type))).map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={addDocument}
          className="mt-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-300 px-5 py-2 text-sm font-semibold text-slate-950"
        >
          Add document
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {docs.map((doc) => (
          <div key={doc.id} className="glass rounded-2xl border border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{doc.name}</div>
                <div className="text-xs text-white/60">{doc.type}</div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs ${doc.status === "Uploaded" ? "bg-emerald-500/20 text-emerald-100" : "bg-white/10 text-white/70"}`}>
                {doc.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
