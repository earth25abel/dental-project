"use client";

import Link from "next/link";
import { useState } from "react";
import ReservationModal from "./ReservationModal";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "의료진 소개" },
  { href: "/services", label: "진료 안내" },
  { href: "/location", label: "오시는 길" },
] as const;

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[rgba(3,7,18,0.92)] backdrop-blur-xl border-b border-[rgba(148,163,184,0.24)]">
        <nav className="max-w-6xl mx-auto px-4 h-18 flex items-center justify-between gap-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 text-[var(--foreground)] hover:text-[var(--accent-gold)] transition-colors"
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full subtle-border bg-[rgba(15,23,42,0.9)] text-base font-semibold tracking-tight"
              aria-hidden
            >
              DP
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight">
                Dental Pro
              </span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                Premium Dental Clinic
              </span>
            </div>
          </Link>

          <ul className="flex items-center gap-1.5">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {label}
                  <span
                    className="pointer-events-none absolute inset-x-3 -bottom-[2px] h-px scale-x-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-70 transition-transform duration-200 group-hover:scale-x-100"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[var(--accent-gold)] text-slate-900 text-sm font-semibold hover:bg-[#f7cf87] active:opacity-90 transition-colors shadow-[0_0_18px_rgba(240,193,115,0.45)]"
          >
            온라인 진료 예약
          </button>
        </nav>
      </header>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
