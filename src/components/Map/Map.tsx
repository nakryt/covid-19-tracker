import React, { FC } from "react";
import "./Map.scss";

import { MapContainer } from "react-leaflet";
import { CaseType, CountryData, MapCoordinates } from "../../types";
import MapView from "./MapView";
import { showDataOnMap } from "../../utils";

interface Props {
  center: MapCoordinates;
  zoom: number;
  countries: CountryData[];
  casesType: CaseType;
}

const Map: FC<Props> = ({ countries, center, zoom, casesType }) => {
  return (
    <div className="map">
      <MapContainer attributionControl={true} center={center} zoom={zoom}>
        <MapView center={center} zoom={zoom} />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
};

export default Map;
