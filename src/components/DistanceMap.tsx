"use client";
import React, { ReactNode, useEffect, useState } from "react";
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
const DistanceMap = ({ position, zoom }: Props) => {
  const [distance, setDistance] = useState<number>();
  const [markers, setMarkers] = useState<ReactNode[]>([]);
  const [path, setPath] = useState<ReactNode>();
  const [positions, setPositions] = useState<L.LatLng[]>([]);

  function degreesToRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
  }

  useEffect(() => {
    if (positions.length !== 2) return;
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
    console.log(_distance);
    setDistance(_distance);
  }, [positions]);

  const Markers = () => {
    useMapEvents({
      preclick(e) {
        let _markers = [...markers];
        let _positions = [...positions];
        _positions.push(e.latlng);
        if (_positions.length > 2) {
          _positions.shift();
          _markers.shift();
        }
        _markers.push(
          <Marker
            key={`marker-${crypto.randomUUID()}`}
            position={[e.latlng.lat, e.latlng.lng]}
            interactive={false}
          />,
        );

        const _path = (
          <ReactLeafletTextPath
            key={`path-${crypto.randomUUID()}`}
            positions={[..._positions]}
            repeat
            center
            offset={20}
            attributes={{
              "font-size": 20,
            }}
          />
        );
        setMarkers(_markers);
        setPath(_path);
        setPositions(_positions);
      },
    });

    return [...markers.map((m) => m), path];
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

export default DistanceMap;
