"use client";

import React, { ReactNode, Suspense } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import * as L from "leaflet";
import "leaflet-textpath";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

type Props = {
  Markers: () => ReactNode[];
};
export default function DistanceMap({ Markers }: Props) {
  const position: L.LatLngTuple = [40.41, -3.7]; //Madrid

  return (
    <div className={"relative z-10 flex h-full w-full"}>
      <Suspense>
        <MapContainer
          className={"h-full w-full"}
          center={position}
          zoom={14}
          scrollWheelZoom={false}
        >
          <Markers></Markers>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </Suspense>
    </div>
  );
}
