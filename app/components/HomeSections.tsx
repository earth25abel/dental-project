"use client";

import AnimatedSection from "./AnimatedSection";

export default function HomeSections() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* 메인 배너 */}
      <AnimatedSection className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(240,193,115,0.09),transparent),radial-gradient(ellipse_120%_100%_at_50%_100%,rgba(15,23,42,0.95),transparent_60%)]"
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.35)] bg-[rgba(15,23,42,0.85)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)] mb-5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(240,193,115,0.12)] text-[var(--accent-gold)]">
                ●
              </span>
              강남 프리미엄 치과 · 1:1 프라이빗 진료
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[3.1rem] font-semibold text-[var(--foreground)] tracking-tight leading-tight">
              아프지 않게,
              <br />
              <span className="bg-gradient-to-r from-[var(--accent-gold)] via-[#ffffff] to-[var(--accent-gold)] bg-clip-text text-transparent">
                정직하게, 오래 가는 진료
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[var(--muted-foreground)] max-w-xl">
              최소 삭제, 보존 중심의 진료 철학으로
              <br className="hidden sm:block" />
              결과보다 과정을 더 엄격히 관리하는 강남 프리미엄 치과입니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent-gold)] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_22px_rgba(240,193,115,0.55)] hover:bg-[#f7cf87] transition-colors"
              >
                즉시 온라인 예약
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(148,163,184,0.4)] px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[rgba(15,23,42,0.85)] transition-colors"
              >
                카카오 상담 연결
              </button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] text-[var(--muted-foreground)]">
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--accent-gold)]" />
                대학병원 출신 보존과 / 보철과 전문의 협진
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--accent-gold)]" />
                모든 진료 CT · 구강스캐너 정밀 진단
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="elevated-panel overflow-hidden p-1.5">
              <div className="relative h-64 sm:h-72 rounded-2xl bg-[radial-gradient(circle_at_20%_0%,rgba(240,193,115,0.12),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.16),transparent_55%),linear-gradient(145deg,#020617,#020617)] flex flex-col justify-between p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                      Signature Care
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                      프라이빗 토탈 스마일 케어
                    </p>
                  </div>
                  <div className="text-right text-[11px] text-[var(--muted-foreground)]">
                    <p>월·수·금 야간 진료</p>
                    <p className="mt-1 text-[var(--accent-gold)]">
                      사전 예약제 · 대기 최소화
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-[var(--muted-foreground)]">
                  <div className="rounded-xl bg-[rgba(15,23,42,0.92)]/90 border border-[rgba(148,163,184,0.35)] p-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                      Aesthetic
                    </p>
                    <p className="mt-1.5 font-medium text-[var(--foreground)]">
                      세라믹 · 라미네이트
                    </p>
                    <p className="mt-1">
                      자연광과 유사한 색조로 환한 미소를 디자인합니다.
                    </p>
                  </div>
                  <div className="rounded-xl bg-[rgba(15,23,42,0.92)]/90 border border-[rgba(148,163,184,0.35)] p-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                      Implant
                    </p>
                    <p className="mt-1.5 font-medium text-[var(--foreground)]">
                      정밀 3D 네비게이션
                    </p>
                    <p className="mt-1">
                      CT 기반 시뮬레이션으로 잇몸·신경을 고려한 안전한 식립.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[var(--muted-foreground)] pt-2 border-t border-[rgba(30,64,175,0.6)]">
                  <p>첫 내원 시 1:1 맞춤 진단 / 상담 30분 제공</p>
                  <span className="inline-flex items-center gap-1 text-[var(--accent-gold)]">
                    더 알아보기
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 진료시간 안내 */}
      <AnimatedSection className="py-18 px-6" delay={0.1}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6 text-center flex items-center justify-center gap-2">
            <span
              className="w-1 h-6 rounded-full bg-[var(--accent-gold)]"
              aria-hidden
            />
            진료시간 안내
          </h2>
          <div className="elevated-panel overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[rgba(148,163,184,0.35)]">
                  <th className="py-4 px-5 font-medium text-[var(--muted-foreground)]">
                    요일
                  </th>
                  <th className="py-4 px-5 font-medium text-[var(--muted-foreground)]">
                    진료시간
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--foreground)]/90">
                <tr className="border-b border-[rgba(148,163,184,0.3)]/60">
                  <td className="py-4 px-5">평일 (월~금)</td>
                  <td className="py-4 px-5">
                    09:00 ~ 18:00
                    <span className="ml-2 text-xs text-[var(--accent-gold)]">
                      · 수·금 야간진료 20:00까지
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[rgba(148,163,184,0.3)]/60">
                  <td className="py-4 px-5">토요일</td>
                  <td className="py-4 px-5">09:00 ~ 13:00</td>
                </tr>
                <tr>
                  <td className="py-4 px-5">일요일 / 공휴일</td>
                  <td className="py-4 px-5 text-[var(--muted-foreground)]">휴진</td>
                </tr>
              </tbody>
            </table>
            <p className="py-3 px-5 text-xs sm:text-sm text-[var(--muted-foreground)] bg-[rgba(15,23,42,0.9)] border-t border-[rgba(148,163,184,0.35)] flex flex-wrap items-center gap-2 justify-between">
              <span>점심시간 12:00 ~ 13:30 (평일)</span>
              <span className="text-[var(--accent-gold)]">
                예약 우선제로 대기 시간을 최소화합니다.
              </span>
            </p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
