import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import InfoBox from "./components/InfoBox/InfoBox";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__stats">
        <InfoBox title="Coronavirus cases" cases={1000} total={2000} />
        <InfoBox title="Recovered" cases={1000} total={123} />
        <InfoBox title="Deaths" cases={134} total={12} />
      </div>
    </div>
  );
}

export default App;
