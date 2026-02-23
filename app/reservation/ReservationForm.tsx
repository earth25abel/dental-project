"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center p-6 rounded-xl border border-[var(--deep-blue)]/20 bg-[var(--deep-blue-muted)]">
        <p className="text-slate-800 font-medium">예약 요청이 접수되었습니다.</p>
        <p className="mt-1 text-sm text-slate-600">
          입력하신 연락처로 확인 후 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
          이름
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="홍길동"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
          전화번호
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="010-1234-5678"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1.5">
          희망 날짜
        </label>
        <input
          id="date"
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-[var(--deep-blue)] text-white font-semibold hover:bg-[var(--deep-blue-hover)] transition-colors"
      >
        예약 요청하기
      </button>
    </form>
  );
}
