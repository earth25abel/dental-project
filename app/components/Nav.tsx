import Link from "next/link";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "의료진 소개" },
  { href: "/services", label: "진료 안내" },
  { href: "/location", label: "오시는 길" },
] as const;

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
        {/* 로고: 깨끗한 치과 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 text-slate-800 hover:text-[#0066FF] transition-colors"
        >
          <span className="text-2xl" aria-hidden>
            🦷
          </span>
          <span className="font-semibold text-lg tracking-tight">
            Dental Pro
          </span>
        </Link>

        {/* 메뉴: 홈, 의료진 소개, 진료 안내, 오시는 길 */}
        <ul className="flex items-center gap-0.5">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="px-4 py-2 rounded-lg text-slate-600 hover:text-[#0066FF] hover:bg-[#0066FF]/5 transition-colors text-sm font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 진료 예약 버튼 */}
        <Link
          href="/reservation"
          className="shrink-0 px-5 py-2.5 rounded-lg bg-[#0066FF] text-white text-sm font-semibold hover:bg-[#0052CC] active:bg-[#0047B3] transition-colors shadow-sm"
        >
          온라인 진료 예약
        </Link>
      </nav>
    </header>
  );
}
