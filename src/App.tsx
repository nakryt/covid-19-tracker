import React, { useEffect, useState } from "react";
import "./App.scss";

import { Card, CardContent } from "@material-ui/core";
import "leaflet/dist/leaflet.css";

import { MapCoordinates, CountryData, CaseType } from "./types";
import Header from "./components/Header/Header";
import InfoBox from "./components/InfoBox/InfoBox";
import Map from "./components/Map/Map";
import Table from "./components/Table/Table";
import LineGraph from "./components/LineGraph/LineGraph";
import { prettyPrintStat } from "./utils";

const coordinatesEurope = {
  lat: 49,
  lng: 16,
};

function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [countryInfo, setCountryInfo] = useState<CountryData>(
    {} as CountryData
  );
  const [center, setCenter] = useState<MapCoordinates>(coordinatesEurope);
  const [zoom, setZoom] = useState(3);
  const [countryIso2, setCountryIso2] = useState("worldwide");
  const [casesType, setCasesType] = useState<CaseType>("cases");

  useEffect(() => {
    const getCountryInfo = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      if (response.ok) {
        const data = (await response.json()) as CountryData;
        setCountryInfo(data);
      }
    };
    let isCancel = false;
    if (!isCancel) {
      getCountryInfo();
    }
    return () => {
      isCancel = true;
    };
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        if (response.ok) {
          const data = (await response.json()) as CountryData[];
          setCountries(data);
        }
      } catch (e) {}
    };

    let isCancel = false;
    if (!isCancel) {
      getCountriesData();
    }

    return () => {
      isCancel = true;
    };
  }, [setCountries]);

  useEffect(() => {
    if (countryIso2 === "worldwide") {
      setCenter(coordinatesEurope);
      setZoom(3);
    } else {
      const country = countries.find((c) => c.countryInfo.iso2 === countryIso2);
      if (country) {
        const { lat, long: lng } = country.countryInfo;
        setCountryInfo(country);
        setCenter({ lat, lng });
        setZoom(4);
      }
    }
  }, [countryIso2, setCountryInfo, setCenter, countries]);

  const {
    todayCases,
    todayRecovered,
    todayDeaths,
    cases,
    recovered,
    deaths,
  } = countryInfo;

  return (
    <div className="app">
      <div className="app__left">
        <Header
          countries={countries}
          setCountryIso2={setCountryIso2}
          countryIso2={countryIso2}
        />
        <div className="app__stats">
          <InfoBox
            onClick={() => setCasesType("cases")}
            title="coronavirus cases"
            cases={prettyPrintStat(todayCases)}
            total={prettyPrintStat(cases)}
            active={casesType === "cases"}
            casesType={casesType}
          />
          <InfoBox
            onClick={() => setCasesType("recovered")}
            title="recovered"
            cases={prettyPrintStat(todayRecovered)}
            total={prettyPrintStat(recovered)}
            active={casesType === "recovered"}
            casesType={casesType}
          />
          <InfoBox
            onClick={() => setCasesType("deaths")}
            title="deaths"
            cases={prettyPrintStat(todayDeaths)}
            total={prettyPrintStat(deaths)}
            active={casesType === "deaths"}
            casesType={casesType}
          />
        </div>
        <Map
          center={center}
          zoom={zoom}
          countries={countries}
          casesType={casesType}
        />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases By Country</h3>
          <Table
            countries={countries}
            setCountryIso2={setCountryIso2}
            countryIso2={countryIso2}
          />
          <LineGraph
            casesType={casesType}
            country={countryInfo.country || "worldwide"}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
