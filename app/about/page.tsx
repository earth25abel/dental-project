import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진 소개 | Dental Pro",
  description: "Dental Pro 의료진 소개.",
};

type Doctor = {
  name: string;
  role: string;
  specialty: string;
  intro: string;
  image: string | null;
  career: string[];
};

const doctors: Doctor[] = [
  {
    name: "김○○",
    role: "대표원장",
    specialty: "임플란트 · 보철 · 일반진료",
    intro: "환자 한 분 한 분을 가족처럼 생각하며, 아프지 않은 진료를 위해 노력합니다.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=560&q=80",
    career: [
      "○○대학교 치의학과 졸업",
      "○○대학교 병원 수련의",
      "대한임플란트학회 정회원",
      "○○치과 원장 역임",
    ],
  },
  {
    name: "이○○",
    role: "원장",
    specialty: "교정 · 심미치료",
    intro: "정직한 상담과 꼼꼼한 치료로 환자님의 미소를 지켜드립니다.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=560&q=80",
    career: [
      "○○대학교 치의학과 졸업",
      "○○대학교 교정과 전문의",
      "대한교정학회 정회원",
    ],
  },
  {
    name: "박○○",
    role: "원장",
    specialty: "소아치료 · 예방치료",
    intro: "아이들이 두려움 없이 찾을 수 있는 따뜻한 치과를 만들고자 합니다.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=560&q=80",
    career: [
      "○○대학교 치의학과 졸업",
      "○○대학교 소아치과 수련",
      "대한소아치과학회 정회원",
    ],
  },
];

function DoctorCard({ name, role, specialty, intro, image, career }: Doctor) {
  return (
    <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-56 shrink-0 aspect-[4/5] md:aspect-auto md:h-[280px] relative bg-[var(--deep-blue-light)] overflow-hidden">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={`${name} 원장`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-5xl font-light text-[var(--deep-blue)]/50 select-none"
                aria-hidden
              >
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold text-slate-800">{name} 원장</h2>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--deep-blue)] text-white">
              {role}
            </span>
          </div>
          <p className="mt-2 text-sm font-medium text-[var(--deep-blue)]">
            {specialty}
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">{intro}</p>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              약력
            </h3>
            <ul className="space-y-2">
              {career.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-600 flex items-start gap-2"
                >
                  <span
                    className="text-[var(--deep-blue)] shrink-0 mt-0.5"
                    aria-hidden
                  >
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[var(--deep-blue-muted)] border-b border-slate-200 py-12 px-4">
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
        <div className="max-w-4xl mx-auto space-y-10">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </section>
    </main>
  );
}
