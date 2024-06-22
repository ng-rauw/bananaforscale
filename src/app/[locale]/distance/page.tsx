"use client";
import DistanceMap from "@/app/[locale]/distance/components/DistanceMap";
import { useMapMarkers } from "@/app/[locale]/distance/hooks/UseMapMarkers";
import { useCalculateMapDistance } from "@/app/[locale]/distance/hooks/UseCalculateMapDistance";
import BananaDistanceMeasure from "@/app/[locale]/distance/components/BananaDistanceMeasure";
import FuetDistanceMeasure from "@/app/[locale]/distance/components/FuetDistanceMeasure";
import BicDistanceMeasure from "@/app/[locale]/distance/components/BicDistanceMeasure";

export default function Height() {
  const { Markers, positions } = useMapMarkers();
  const { distance } = useCalculateMapDistance(positions);

  return (
    <article className={"relative flex min-h-full"}>
      <div className={"sticky top-0 max-h-screen w-1/2"}>
        <DistanceMap Markers={Markers} />
      </div>
      <div className={"w-1/2 "}>
        <BananaDistanceMeasure distance={distance} />
        <FuetDistanceMeasure distance={distance} />
        <BicDistanceMeasure distance={distance} />
      </div>
    </article>
  );
}
