"use client";

import { useState } from "react";

type ReservationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setName("");
    setPhone("");
    setDate("");
    setSubmitted(false);
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
    >
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden
      />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h2 id="reservation-modal-title" className="text-lg font-semibold text-slate-800">
            온라인 진료 예약
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            aria-label="닫기"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <p className="text-slate-800 font-medium">예약 요청이 접수되었습니다.</p>
              <p className="mt-1 text-sm text-slate-600">
                입력하신 연락처로 확인 후 연락드리겠습니다.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 px-5 py-2.5 rounded-lg bg-[var(--deep-blue)] text-white text-sm font-medium hover:bg-[var(--deep-blue-hover)] transition-colors"
              >
                확인
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  이름
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="홍길동"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                  연락처
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="modal-date" className="block text-sm font-medium text-slate-700 mb-1.5">
                  희망 날짜
                </label>
                <input
                  id="modal-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--deep-blue)] focus:border-transparent"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-lg bg-[var(--deep-blue)] text-white font-semibold hover:bg-[var(--deep-blue-hover)] transition-colors"
                >
                  예약 요청
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
