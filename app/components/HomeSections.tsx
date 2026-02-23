"use client";

import AnimatedSection from "./AnimatedSection";

export default function HomeSections() {
  return (
    <main className="min-h-screen bg-white">
      {/* 메인 배너 */}
      <AnimatedSection className="relative bg-gradient-to-b from-[var(--deep-blue-muted)] to-white py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,40,71,0.06),transparent)]"
          aria-hidden
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 tracking-tight leading-tight">
            아프지 않은 진료,
            <br />
            <span className="text-[var(--deep-blue)]">정직한 치과</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto">
            환자를 가족처럼, 신뢰와 따뜻함으로 함께합니다.
          </p>
        </div>
      </AnimatedSection>

      {/* 진료시간 안내 */}
      <AnimatedSection className="py-16 px-6 bg-white" delay={0.1}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center flex items-center justify-center gap-2">
            <span
              className="w-1 h-6 rounded-full bg-[var(--deep-blue)]"
              aria-hidden
            />
            진료시간 안내
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[var(--deep-blue-muted)] border-b border-slate-200">
                  <th className="py-4 px-5 font-medium text-slate-700">요일</th>
                  <th className="py-4 px-5 font-medium text-slate-700">
                    진료시간
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-5">평일 (월~금)</td>
                  <td className="py-4 px-5">09:00 ~ 18:00</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-5">토요일</td>
                  <td className="py-4 px-5">09:00 ~ 13:00</td>
                </tr>
                <tr>
                  <td className="py-4 px-5">일요일 / 공휴일</td>
                  <td className="py-4 px-5">휴진</td>
                </tr>
              </tbody>
            </table>
            <p className="py-3 px-5 text-sm text-slate-500 bg-[var(--deep-blue-muted)]/50 border-t border-slate-100">
              점심시간 12:00 ~ 13:30 (평일)
            </p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
