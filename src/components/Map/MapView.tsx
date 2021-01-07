import React, { FC } from "react";
import { TileLayer, useMap } from "react-leaflet";
import { MapCoordinates } from "../../types";

interface Props {
  center: MapCoordinates;
  zoom: number;
}

const MapView: FC<Props> = ({ center: { lat, lng }, zoom }) => {
  const map = useMap();
  map.setView([lat, lng], zoom);
  return (
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  );
};

export default MapView;
