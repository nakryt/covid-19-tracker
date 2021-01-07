import React, { FC, useEffect, useState } from "react";
import "./LineGraph.scss";

import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { formatCartData } from "../../utils";
import color from "../../styles/color";
import { CaseType, ChartData, DataForChart } from "../../types";

const options = {
  legend: false,
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem: any, data: any) {
        return numeral(tooltipItem.value).format("+0.0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          // format: "MM/DD/YY",
          tooltipFormat: "ll",
          parser: "MM/DD/YY",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value: any) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

interface Props {
  casesType: CaseType;
}

const LineGraph: FC<Props> = ({ casesType }) => {
  const [data, setData] = useState<ChartData>({} as ChartData);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
        );
        if (response.ok) {
          const data = (await response.json()) as DataForChart;
          setData(formatCartData(data, casesType));
        }
      } catch (e) {}
    };

    getData();
  }, [casesType]);

  return (
    <div className="lineGraph">
      <h3 className="lineGraph__title">Worldwide new {casesType}</h3>
      {Object.keys(data).length > 0 ? (
        <Line
          data={{
            datasets: [
              {
                data,
                backgroundColor: color[casesType].fill,
                borderColor: color[casesType].stroke,
              },
            ],
          }}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default LineGraph;
