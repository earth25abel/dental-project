import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "진료 안내 | Dental Pro",
  description: "Dental Pro 진료 안내.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <section className="max-w-md w-full text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          진료 안내
        </h1>
        <p className="mt-4 text-slate-600">준비 중입니다.</p>
        <Link
          href="/"
          className="inline-block mt-8 px-5 py-2.5 rounded-lg bg-[#0066FF] text-white text-sm font-medium hover:bg-[#0052CC] transition-colors"
        >
          메인으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
