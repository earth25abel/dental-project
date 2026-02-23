import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길 | Dental Pro",
  description: "Dental Pro 위치, 주소, 주차 안내.",
};

const address = "서울특별시 ○○구 ○○로 123 2층";
const phone = "02-1234-5678";

const parkingItems = [
  "건물 지하 1층 주차장 이용 가능합니다.",
  "진료 시 2시간 무료 주차권을 발급해 드립니다.",
  "만차 시 인근 공영주차장을 안내해 드립니다.",
];

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 상단 타이틀 */}
      <section className="bg-slate-50/80 border-b border-slate-200 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            오시는 길
          </h1>
          <p className="mt-2 text-slate-600">
            찾아오시는 길을 안내해 드립니다.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* 카카오맵 지도 영역 */}
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#0066FF] rounded-full" aria-hidden />
            지도
          </h2>
          <div
            id="kakao-map"
            className="w-full aspect-[16/10] min-h-[280px] rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-500 overflow-hidden"
            aria-label="카카오맵 지도"
          >
            <p className="text-sm">카카오맵 영역 (카카오맵 API 연동 시 지도가 표시됩니다)</p>
          </div>
        </section>

        {/* 주소 안내 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#0066FF] rounded-full" aria-hidden />
            주소
          </h2>
          <div className="space-y-3 text-slate-600">
            <p className="font-medium text-slate-800">{address}</p>
            <p>
              <span className="text-slate-500">전화 </span>
              <a
                href={`tel:${phone.replace(/-/g, "")}`}
                className="text-[#0066FF] font-medium hover:underline"
              >
                {phone}
              </a>
            </p>
            <p className="text-sm text-slate-500 pt-1">
              카카오맵·네이버맵에서 &quot;Dental Pro&quot; 또는 위 주소로 검색하시면 됩니다.
            </p>
          </div>
        </section>

        {/* 주차 안내 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#0066FF] rounded-full" aria-hidden />
            주차 안내
          </h2>
          <ul className="space-y-2 text-slate-600">
            {parkingItems.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#0066FF] shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
