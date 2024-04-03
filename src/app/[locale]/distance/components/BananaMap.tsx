"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { LatLngTuple } from "leaflet";

export default function BananaMap() {
  const BANANA_HEIGHT = 20.5;
  const position: LatLngTuple = [40.41, -3.7];
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );

  return (
    <div className={"h-screen w-full"}>
      <Map zoom={12} position={position} />
    </div>
  );
}
