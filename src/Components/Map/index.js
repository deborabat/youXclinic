import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import * as S from "./styles";

const Maps = () => {
  const position = [51.505, -0.09];
  const [location, setLocation] = useState(position);
  return (
    <S.Wapper>
      <MapContainer
        style={{ height: "80vh", width: "140vh" }}
        center={[51.0, 19.0]}
        zoom={4}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <MarkerClusterGroup>
          <Marker position={[49.8397, 24.0297]} />
          <Marker position={[52.2297, 21.0122]} />
          <Marker position={[51.5074, -0.0901]} />
        </MarkerClusterGroup>
      </MapContainer>
    </S.Wapper>
  );
};
export default Maps;
