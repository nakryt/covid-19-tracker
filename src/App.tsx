import React, { useEffect, useState } from "react";
import "./App.scss";

import { Card, CardContent } from "@material-ui/core";

import Header from "./components/Header/Header";
import InfoBox from "./components/InfoBox/InfoBox";
import Map from "./components/Map/Map";
import { ResponseData } from "./types";
import Table from "./components/Table/Table";
import LineGraph from "./components/LineGraph/LineGraph";

function App() {
  const [countries, setCountries] = useState<ResponseData[]>([]);
  const [countryInfo, setCountryInfo] = useState<ResponseData>(
    {} as ResponseData
  );

  useEffect(() => {
    const getCountryInfo = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      if (response.ok) {
        const data = (await response.json()) as ResponseData;
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
          setCountryInfo={setCountryInfo}
          setCountries={setCountries}
          countries={countries}
        />
        <div className="app__stats">
          <InfoBox title="Coronavirus cases" cases={todayCases} total={cases} />
          <InfoBox title="Recovered" cases={todayRecovered} total={recovered} />
          <InfoBox title="Deaths" cases={todayDeaths} total={deaths} />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases By Country</h3>
          <Table countries={countries} />

          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
