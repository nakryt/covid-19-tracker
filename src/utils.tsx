import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import { CountryData, DataForChart, ChartData, CaseType } from "./types";

export const sortData = (data: CountryData[]) =>
  data.slice().sort((a, b) => b.cases - a.cases);

export const formatCartData = (
  data: DataForChart,
  casesType: CaseType = "cases"
) => {
  const chartData: ChartData = [];
  let lastDatePoint: number = 0;
  for (let date in data[casesType]) {
    if (lastDatePoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDatePoint,
      };
      chartData.push(newDataPoint);
    }
    lastDatePoint = data[casesType][date];
  }
  return chartData;
};

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 250,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 150,
  },
  deaths: {
    hex: "#920303",
    multiplier: 300,
  },
};

export const showDataOnMap = (data: CountryData[], casesType: CaseType) => {
  return data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
      key={country.country}
    >
      <Popup autoClose={true}>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>

          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
};

export const prettyPrintStat = (stat: number) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";
