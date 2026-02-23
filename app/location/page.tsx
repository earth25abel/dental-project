import type { Metadata } from "next";
import KakaoMap from "./KakaoMap";

export const metadata: Metadata = {
  title: "오시는 길 | Dental Pro",
  description: "Dental Pro 위치, 주소, 주차 안내.",
};

/**
 * 카카오맵 API 키: .env.local에 NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY=발급키 추가
 * 발급: https://developers.kakao.com/console/app
 */
const address = "서울특별시 강남구 테헤란로 152 강남파이낸스센터";
const phone = "02-1234-5678";
const MAP_LAT = 37.5006;
const MAP_LNG = 127.0364;

const parkingItems = [
  "건물 지하 1층 주차장 이용 가능합니다.",
  "진료 시 2시간 무료 주차권을 발급해 드립니다.",
  "만차 시 인근 공영주차장을 안내해 드립니다.",
];

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[var(--deep-blue-muted)] border-b border-slate-200 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            오시는 길
          </h1>
          <p className="mt-2 text-slate-600">
            찾아오시는 길을 안내해 드립니다.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 지도 + 주소 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <KakaoMap
                lat={MAP_LAT}
                lng={MAP_LNG}
                address={address}
                level={3}
                showMarker
                placeName="Dental Pro"
              />
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-center">
            <h2 className="text-base font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-[var(--deep-blue)] rounded-full" aria-hidden />
              주소
            </h2>
            <p className="font-medium text-slate-800">{address}</p>
            <a
              href={`tel:${phone.replace(/-/g, "")}`}
              className="mt-2 text-[var(--deep-blue)] font-medium hover:underline"
            >
              {phone}
            </a>
            <a
              href={`https://map.kakao.com/link/to/${encodeURIComponent("Dental Pro")},${MAP_LAT},${MAP_LNG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[var(--deep-blue)] hover:underline"
            >
              카카오맵 길찾기 →
            </a>
          </div>
        </div>

        {/* 주차 안내 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-[var(--deep-blue)] rounded-full" aria-hidden />
            주차 안내
          </h2>
          <ul className="space-y-2 text-slate-600">
            {parkingItems.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--deep-blue)] shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
