import React, { FC } from "react";
import "./Map.scss";

import { MapContainer } from "react-leaflet";
import { MapCoordinates } from "../../types";
import MapView from "./MapView";

interface Props {
  center: MapCoordinates;
  zoom: number;
}

const Map: FC<Props> = ({ center, zoom }) => {
  return (
    <div className="map">
      <MapContainer attributionControl={true} center={center} zoom={zoom}>
        <MapView center={center} zoom={zoom} />
      </MapContainer>
    </div>
  );
};

export default Map;
