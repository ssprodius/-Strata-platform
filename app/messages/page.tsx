import { notificationList } from "../../src/lib/data";

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Inbox</p>
        <h1 className="text-3xl font-semibold">Signals & guidance</h1>
        <p className="text-white/70">Product-only UI; no live messaging.</p>
      </div>

      <div className="space-y-3">
        {notificationList.map((note) => (
          <div key={note.id} className="glass rounded-2xl border border-white/10 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase text-brand-100">{note.type}</span>
              <span className="text-xs text-white/60">Actionable</span>
            </div>
            <p className="mt-2 text-sm text-white">{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
