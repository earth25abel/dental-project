"use client";

import { motion } from "framer-motion";

const KakaoFloatingButton = () => {
  // 나중에 실제 치과 카카오톡 채널 URL로 변경하세요.
  const KAKAO_CHANNEL_URL = "https://pf.kakao.com/_xxxxxx"; 

  return (
    <motion.a
      href={KAKAO_CHANNEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] shadow-lg"
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.029 3 3 6.12 3 9.96c0 2.49 1.68 4.68 4.2 5.94-.15.54-.54 1.95-.63 2.25-.12.42.15.42.33.3.12-.09 2.04-1.38 2.85-1.92.39.06.78.09 1.25.09 4.971 0 9-3.12 9-6.96C21 6.12 16.971 3 12 3z" fill="#000000"/>
      </svg>
    </motion.a>
  );
};

export default KakaoFloatingButton;