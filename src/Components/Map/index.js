import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import * as S from "./styles";

const Maps = ({ users }) => {
  return (
    <S.Wapper>
      <MapContainer
        // todo: estilo inline
        style={{ height: "80vh", width: "140vh" }}
        center={[-10.59, -55.1]}
        zoom={4}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <MarkerClusterGroup>
          {users.map((item, index) => (
            <Marker
              key={index}
              position={[item.coordinates.lat, item.coordinates.long]}
            />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </S.Wapper>
  );
};
export default Maps;
