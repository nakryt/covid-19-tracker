import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Header.scss";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import axios from "../../axios";
import { CountriesData, ResponseData } from "../../types";

const Header = () => {
  const [countries, setCountries] = useState<CountriesData[]>([]);
  const [country, setCountry] = useState<string>("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const data = (await axios.get<ResponseData[]>("/countries")).data;
        setCountries(
          data.map((d) => ({
            name: d.country,
            value: d.countryInfo.iso2,
          }))
        );
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

  const onCountryChange = (e: ChangeEvent<{ value: unknown }>) => {
    const countryCode = e.target.value as string;

    setCountry(countryCode);
  };

  return (
    <div className="header">
      <h2>COVID-19 TRACKER</h2>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map(({ name, value }) => (
            <MenuItem value={value}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
