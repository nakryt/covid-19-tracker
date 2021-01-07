import React, { FC } from "react";
import "./Table.scss";

import numeral from "numeral";
import { CountryData } from "../../types";
import { sortData } from "../../utils";
import color from "../../styles/color";

interface Props {
  countries: CountryData[];
  countryIso2: string;
  setCountryIso2: (iso2: string) => void;
}

const Table: FC<Props> = ({ countries, setCountryIso2, countryIso2 }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          {sortData(countries).map(
            ({ country, cases, countryInfo: { iso2 } }, index) => (
              <tr
                key={country}
                onClick={() => setCountryIso2(iso2)}
                style={{
                  backgroundColor:
                    countryIso2 === iso2 ? color.recovered.fill : undefined,
                }}
              >
                <td>
                  <span>{index + 1}</span>
                  {country}
                </td>
                <td>
                  <strong>{numeral(cases).format("0,0")}</strong>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
