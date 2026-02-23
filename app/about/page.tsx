import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진 소개 | Dental Pro",
  description: "Dental Pro 의료진 소개.",
};

const doctors = [
  {
    name: "김○○",
    role: "대표원장",
    specialty: "임플란트 · 보철 · 일반진료",
    intro: "환자 한 분 한 분을 가족처럼 생각하며, 아프지 않은 진료를 위해 노력합니다.",
  },
  {
    name: "이○○",
    role: "원장",
    specialty: "교정 · 심미치료",
    intro: "정직한 상담과 꼼꼼한 치료로 환자님의 미소를 지켜드립니다.",
  },
  {
    name: "박○○",
    role: "원장",
    specialty: "소아치료 · 예방치료",
    intro: "아이들이 두려움 없이 찾을 수 있는 따뜻한 치과를 만들고자 합니다.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-50/80 border-b border-slate-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            의료진 소개
          </h1>
          <p className="mt-2 text-slate-600">
            신뢰할 수 있는 전문 의료진이 함께합니다.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {doctors.map((doctor, index) => (
              <li key={index}>
                <article className="h-full flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-[#0066FF]/20 transition-all duration-200">
                  {/* 프로필 이미지 영역 */}
                  <div className="aspect-square bg-gradient-to-b from-slate-100 to-slate-50 flex items-center justify-center">
                    <span
                      className="text-5xl font-light text-[#0066FF]/70 select-none"
                      aria-hidden
                    >
                      {doctor.name.charAt(0)}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-semibold text-slate-800">
                        {doctor.name} 원장
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0066FF]/10 text-[#0066FF]">
                        {doctor.role}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-slate-500">
                      {doctor.specialty}
                    </p>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                      {doctor.intro}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
