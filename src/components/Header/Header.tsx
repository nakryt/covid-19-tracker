import React, { ChangeEvent, FC, useState } from "react";
import "./Header.scss";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { CountryData } from "../../types";

interface Props {
  countries: CountryData[];
  setCountryIso2: (iso2: string) => void;
  countryIso2: string;
}

const Header: FC<Props> = ({ countries, setCountryIso2, countryIso2 }) => {
  const onCountryChange = async (e: ChangeEvent<{ value: unknown }>) => {
    const countryCode = e.target.value as string;
    setCountryIso2(countryCode);
  };

  return (
    <div className="header">
      <h2>COVID-19 TRACKER</h2>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value={countryIso2}
          onChange={onCountryChange}
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map(({ country, countryInfo: { iso2 } }) => (
            <MenuItem key={country} value={iso2}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
