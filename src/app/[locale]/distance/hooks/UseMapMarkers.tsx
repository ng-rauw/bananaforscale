import React, { ReactNode, useState } from "react";
import { LatLng } from "leaflet";
import { Marker, useMapEvents } from "react-leaflet";
import ReactLeafletTextPath from "react-leaflet-textpath";

type UseMapMarkersResult = {
  markers: ReactNode[];
  path: ReactNode | undefined;
  Markers: () => ReactNode[];
  positions: LatLng[];
};

export function useMapMarkers(): UseMapMarkersResult {
  const [markers, setMarkers] = useState<ReactNode[]>([]);
  const [path, setPath] = useState<ReactNode>();
  const [positions, setPositions] = useState<LatLng[]>([]);

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
  return { markers, path, Markers, positions };
}
