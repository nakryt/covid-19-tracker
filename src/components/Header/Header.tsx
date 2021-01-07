import React, { ChangeEvent, FC, useState } from "react";
import "./Header.scss";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { CountryData } from "../../types";

interface Props {
  countries: CountryData[];
  setCountryIso2: (iso2: string) => void;
}

const Header: FC<Props> = ({ countries, setCountryIso2 }) => {
  const [country, setCountry] = useState<string>("worldwide");

  const onCountryChange = async (e: ChangeEvent<{ value: unknown }>) => {
    const countryCode = e.target.value as string;
    setCountry(countryCode);
    setCountryIso2(countryCode);
  };

  return (
    <div className="header">
      <h2>COVID-19 TRACKER</h2>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
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
