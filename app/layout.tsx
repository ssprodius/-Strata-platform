import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "../components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strata | Founder-first funding platform",
  description: "Prototype for Strata funding OS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white`}>
        <TopNav />
        <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">{children}</main>
      </body>
    </html>
  );
}
