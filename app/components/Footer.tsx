import Link from "next/link";

const address = "서울특별시 ○○구 ○○로 123 2층";
const phone = "02-1234-5678";
const hours = [
  { label: "평일", value: "09:00 ~ 18:00" },
  { label: "토요일", value: "09:00 ~ 13:00" },
  { label: "일·공휴일", value: "휴진" },
  { label: "점심시간", value: "12:00 ~ 13:30 (평일)" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-[var(--deep-blue-muted)]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--deep-blue)] mb-2">
              주소
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {address}
            </p>
            <Link
              href="/location"
              className="inline-block mt-2 text-sm font-medium text-[var(--deep-blue)] hover:underline"
            >
              오시는 길 →
            </Link>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--deep-blue)] mb-2">
              전화
            </h3>
            <a
              href={`tel:${phone.replace(/-/g, "")}`}
              className="text-slate-700 font-medium hover:text-[var(--deep-blue)] transition-colors"
            >
              {phone}
            </a>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--deep-blue)] mb-2">
              진료시간
            </h3>
            <ul className="space-y-1 text-sm text-slate-600">
              {hours.map(({ label, value }) => (
                <li key={label} className="flex justify-between gap-4">
                  <span className="text-slate-500 shrink-0">{label}</span>
                  <span className="text-right">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
          © Dental Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
