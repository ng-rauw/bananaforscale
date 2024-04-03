"use client";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import * as L from "leaflet";
import ReactLeafletTextPath from "react-leaflet-textpath";
import "leaflet-textpath";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"; // Re-uses images from ~leaflet package

type Props = {
  position: L.LatLngTuple;
  zoom: number;
};
const Map = ({ position, zoom }: Props) => {
  const [markers, setMarkers] = useState<ReactNode[]>([]);
  const [positions, setPositions] = useState<L.LatLng[]>([]);

  const Markers = () => {
    useMapEvents({
      click(e) {
        console.log(e);
        const m = [...markers];
        const p = [...positions];
        p.push(e.latlng);
        setPositions(p);
        m.push(
          <Marker
            key={e.latlng.lat}
            position={[e.latlng.lat, e.latlng.lng]}
            interactive={false}
          />,
        );
        const path = (
          <ReactLeafletTextPath
            key={"path"}
            positions={[...p]}
            repeat
            center
            offset={20}
            attributes={{
              "font-size": 20,
            }}
          />
        );
        m.push(path);
        setMarkers(m);
      },
    });

    return markers.map((m) => m);
  };
  return (
    <MapContainer
      className={"h-full "}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <Markers></Markers>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
