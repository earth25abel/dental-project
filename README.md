# 병원 홈페이지

Next.js(App Router) + TypeScript + Tailwind CSS로 구성된 병원 홈페이지 프로젝트입니다.

## 기술 스택

- **Next.js** (최신 버전, App Router)
- **TypeScript**
- **Tailwind CSS** v4

## 시작하기

1. 의존성 설치:
   ```bash
   npm install
   ```

2. 개발 서버 실행:
   ```bash
   npm run dev
   ```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 프로젝트 구조

- `app/` - App Router 기반 페이지 및 레이아웃
  - `layout.tsx` - 루트 레이아웃
  - `page.tsx` - 메인 페이지 (슬로건, 진료시간 안내)
  - `globals.css` - 전역 스타일

## 메인 페이지 구성

- **슬로건**: "환자를 가족처럼"
- **진료시간 안내**: 평일/토요일/일요일·공휴일 진료시간 표

진료시간은 `app/page.tsx`에서 수정할 수 있습니다.
