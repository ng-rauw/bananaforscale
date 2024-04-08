import { LatLng } from "leaflet";
import { useEffect, useState } from "react";

export function useCalculateMapDistance(positions: LatLng[]): {
  distance: number;
} {
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    if (positions.length !== 2) return;

    const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

    const lat1 = positions[0].lat;
    const lat2 = positions[1].lat;
    const lon1 = positions[0].lng;
    const lon2 = positions[1].lng;
    const earthRadiusCm = 6371 * 1000 * 100;

    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(lat1)) *
        Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const _distance = earthRadiusCm * c;
    setDistance(_distance);
  }, [positions]);

  return { distance };
}
