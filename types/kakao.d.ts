/* 카카오맵 API 타입 선언 */
declare global {
  interface Window {
    kakao: typeof kakao;
  }
}

declare namespace kakao.maps {
  class LatLng {
    constructor(lat: number, lng: number);
    getLat(): number;
    getLng(): number;
  }

  interface MapOptions {
    center: LatLng;
    level?: number;
  }

  class Map {
    constructor(container: HTMLElement, options: MapOptions);
    setCenter(latlng: LatLng): void;
    getCenter(): LatLng;
    setLevel(level: number): void;
  }

  class Marker {
    constructor(options?: MarkerOptions);
    setMap(map: Map | null): void;
  }

  interface MarkerOptions {
    position: LatLng;
    map?: Map;
  }

  namespace event {
    function addListener(
      target: object,
      type: string,
      handler: () => void
    ): void;
  }

  namespace services {
    interface Status {
      OK: string;
      ZERO_RESULT: string;
      ERROR: string;
    }

    class Geocoder {
      addressSearch(
        address: string,
        callback: (result: AddressSearchResult[], status: Status) => void
      ): void;
    }

    interface AddressSearchResult {
      address_name: string;
      address: {
        region_1depth_name: string;
        region_2depth_name: string;
        region_3depth_name: string;
      };
      road_address: {
        address_name: string;
        region_1depth_name: string;
        region_2depth_name: string;
        region_3depth_name: string;
        road_name: string;
        underground_yn: string;
        main_building_no: string;
        sub_building_no: string;
        building_name: string;
        zone_no: string;
        x: string;
        y: string;
      } | null;
      x: string;
      y: string;
    }
  }
}

export {};
