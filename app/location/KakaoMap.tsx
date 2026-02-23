"use client";

import { useEffect, useRef, useState } from "react";

type KakaoMapProps = {
  /** 위도 (예: 37.5665) - address와 함께 주면 address로 검색 후 fallback */
  lat?: number;
  /** 경도 (예: 126.978) */
  lng?: number;
  /** 주소로 좌표 검색 (lat, lng 없을 때 사용) */
  address?: string;
  /** 지도 확대 레벨 (1~14, 숫자 작을수록 확대) */
  level?: number;
  /** 마커 표시 여부 */
  showMarker?: boolean;
  /** 장소명 */
  placeName?: string;
};

const DEFAULT_LAT = 37.5665;
const DEFAULT_LNG = 126.978;

export default function KakaoMap({
  lat,
  lng,
  address,
  level = 3,
  showMarker = true,
  placeName = "Dental Pro",
}: KakaoMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY;
    if (!key) {
      setError("카카오맵 API 키가 설정되지 않았습니다. .env.local에 NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY를 추가하세요.");
      return;
    }

    const initMap = (latitude: number, longitude: number) => {
      if (!containerRef.current || !window.kakao?.maps) return;

      const center = new window.kakao.maps.LatLng(latitude, longitude);
      const options = { center, level };
      const map = new window.kakao.maps.Map(containerRef.current, options);
      mapRef.current = map;

      if (showMarker) {
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
        const marker = new window.kakao.maps.Marker({ position: markerPosition });
        marker.setMap(map);
      }
    };

    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.kakao?.maps) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&libraries=services&autoload=false`;
        script.async = true;
        script.onload = () => {
          window.kakao.maps.load(() => resolve());
        };
        script.onerror = () => reject(new Error("카카오맵 스크립트 로드 실패"));
        document.head.appendChild(script);
      });
    };

    const run = async () => {
      try {
        await loadScript();

        const hasCoords = lat != null && lng != null;
        if (address && !hasCoords) {
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(address, (result, status) => {
            if (status === "OK" && result[0]) {
              initMap(parseFloat(result[0].y), parseFloat(result[0].x));
            } else {
              initMap(DEFAULT_LAT, DEFAULT_LNG);
            }
          });
        } else {
          initMap(lat ?? DEFAULT_LAT, lng ?? DEFAULT_LNG);
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "지도를 불러올 수 없습니다.");
      }
    };

    run();
    return () => {
      mapRef.current = null;
    };
  }, [lat, lng, address, level, showMarker]);

  if (error) {
    return (
      <div className="w-full aspect-[16/10] min-h-[280px] rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-600 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[16/10] min-h-[280px] rounded-xl border border-slate-200 overflow-hidden"
      aria-label="카카오맵 지도"
    />
  );
}
