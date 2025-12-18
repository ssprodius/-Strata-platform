import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/apply", label: "Apply" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/funding-options", label: "Funding" },
  { href: "/investors", label: "Investors" },
  { href: "/deal-room", label: "Deal room" }
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-20 w-full border-b border-white/5 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600" />
          <span className="text-gradient">Strata</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-white ${pathname === link.href ? "text-white" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/dashboard"
            className="rounded-full border border-brand-400/50 px-4 py-2 font-medium text-brand-50 transition hover:border-brand-300 hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/apply"
            className="hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-300 px-4 py-2 font-semibold text-slate-950 shadow-lg transition hover:from-brand-400 hover:to-brand-200 md:block"
          >
            Apply now
          </Link>
        </div>
      </div>
    </nav>
  );
}
