import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "진료 안내 | 임플란트·교정 | 정직한 치과",
  description: "임플란트, 교정 진료 안내. 아프지 않은 진료, 정직한 치과.",
};

const implantItems = [
  "자연치와 유사한 씹는 힘과 심미성을 복원합니다.",
  "상담·검진 후 맞춤 치료 계획을 수립합니다.",
  "검증된 임플란트 시스템과 숙련된 진료로 안전하게 진행합니다.",
];

const orthoItems = [
  "교정 상담 및 분석을 통해 최적의 방법을 제안합니다.",
  "기존 교정과 투명 교정 등 환자님에게 맞는 옵션을 안내합니다.",
  "정기 검진으로 진행 상황을 꼼꼼히 관리합니다.",
];

export default function TreatmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            진료 안내
          </h1>
          <p className="mt-3 text-slate-600">
            임플란트·교정 등 주요 진료를 안내해 드립니다.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 space-y-16">
        <div className="max-w-3xl mx-auto">
          {/* 임플란트 */}
          <div className="rounded-2xl border border-sky-100 bg-white shadow-sm overflow-hidden">
            <div className="bg-sky-50/80 border-b border-sky-100 px-6 py-4">
              <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-sky-500 rounded-full" aria-hidden />
                임플란트
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                잃어버린 치아를 대체하는 인공치근 식립 치료
              </p>
            </div>
            <ul className="px-6 py-5 space-y-3">
              {implantItems.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-600 leading-relaxed"
                >
                  <span className="text-sky-500 mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* 교정 */}
          <div className="rounded-2xl border border-sky-100 bg-white shadow-sm overflow-hidden">
            <div className="bg-sky-50/80 border-b border-sky-100 px-6 py-4">
              <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-sky-500 rounded-full" aria-hidden />
                교정
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                부정교합 개선 및 심미적 치열 교정
              </p>
            </div>
            <ul className="px-6 py-5 space-y-3">
              {orthoItems.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-slate-600 leading-relaxed"
                >
                  <span className="text-sky-500 mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
