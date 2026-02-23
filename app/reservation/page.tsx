import type { Metadata } from "next";
import ReservationForm from "./ReservationForm";

export const metadata: Metadata = {
  title: "진료 예약 | Dental Pro",
  description: "Dental Pro 온라인 진료 예약.",
};

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-50/80 border-b border-slate-200 py-10 px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            진료 예약
          </h1>
          <p className="mt-2 text-slate-600">
            아래 내용을 입력해 주시면 확인 후 연락드리겠습니다.
          </p>
        </div>
      </section>

      <section className="max-w-md mx-auto px-4 py-10">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <ReservationForm />
        </div>
      </section>
    </main>
  );
}
