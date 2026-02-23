import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진 소개 | 정직한 치과",
  description: "정직한 치과 의료진을 소개합니다.",
};

const doctors = [
  {
    name: "김○○ 원장",
    role: "대표원장",
    specialty: "임플란트, 보철, 일반진료",
    intro: "환자 한 분 한 분을 가족처럼 생각하며, 아프지 않은 진료를 위해 노력합니다.",
  },
  {
    name: "이○○ 원장",
    role: "부원장",
    specialty: "교정, 심미치료",
    intro: "정직한 상담과 꼼꼼한 치료로 환자님의 미소를 지켜드립니다.",
  },
];

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            의료진 소개
          </h1>
          <p className="mt-3 text-slate-600">
            신뢰할 수 있는 전문 의료진이 함께합니다.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {doctors.map((doctor, index) => (
            <article
              key={index}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-sky-100 bg-white shadow-sm"
            >
              <div className="sm:w-32 shrink-0 h-32 rounded-xl bg-sky-100 flex items-center justify-center text-sky-400 text-4xl font-light">
                {doctor.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold text-slate-800">
                    {doctor.name}
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-sm font-medium bg-sky-100 text-sky-700">
                    {doctor.role}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-sky-600">
                  {doctor.specialty}
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {doctor.intro}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
