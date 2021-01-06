import React, { FC } from "react";
import "./Table.scss";
import { ResponseData } from "../../types";
import { sortData } from "../../utils";

interface Props {
  countries: ResponseData[];
}

const Table: FC<Props> = ({ countries }) => {
  return (
    <div className="table">
      {sortData(countries).map(({ country, cases }, index) => (
        <tr>
          <td>
            <span>{index + 1}</span>
            {country}
          </td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
