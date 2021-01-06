import React, { ChangeEvent, FC, useEffect, useState } from "react";
import "./Header.scss";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { ResponseData } from "../../types";

interface Props {
  countries: ResponseData[];
  setCountries: (countries: ResponseData[]) => void;
  setCountryInfo: (info: ResponseData) => void;
}

const Header: FC<Props> = ({ setCountryInfo, setCountries, countries }) => {
  const [country, setCountry] = useState<string>("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        if (response.ok) {
          const data = (await response.json()) as ResponseData[];
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
  }, []);

  const onCountryChange = async (e: ChangeEvent<{ value: unknown }>) => {
    const countryCode = e.target.value as string;
    setCountry(countryCode);

    const country = countries.find((c) => c.countryInfo.iso2 === countryCode);
    country && setCountryInfo(country);

    // const url =
    //   countryCode === "worldwide"
    //     ? "https://disease.sh/v3/covid-19/all"
    //     : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    // const response = await fetch(url);
    // if (response.ok) {
    //   const data = (await response.json()) as ResponseData;
    //   setCountryInfo(data);
    // }
  };

  return (
    <div className="header">
      <h2>COVID-19 TRACKER</h2>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map(({ country, countryInfo: { iso2 } }) => (
            <MenuItem key={iso2} value={iso2}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
