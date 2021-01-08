import React, { FC, useEffect, useState } from "react";
import "./LineGraph.scss";

import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { formatCartData } from "../../utils";
import color from "../../styles/color";
import {
  CaseType,
  ChartData,
  DataForChart,
  DataForChartCountry,
} from "../../types";

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
  country: string;
}

const LineGraph: FC<Props> = ({ casesType, country }) => {
  const [data, setData] = useState<ChartData>({} as ChartData);

  useEffect(() => {
    const getData = async () => {
      try {
        const isAllWorld = country === "worldwide";
        const response = await fetch(
          `https://disease.sh/v3/covid-19/historical/${
            isAllWorld ? "all" : country
          }?lastdays=60`
        );
        if (response.ok) {
          if (isAllWorld) {
            const data = (await response.json()) as DataForChart;
            setData(formatCartData(data, casesType));
          } else {
            const data = (await response.json()) as DataForChartCountry;
            setData(formatCartData(data.timeline, casesType));
          }
        }
      } catch (e) {}
    };

    getData();
  }, [casesType, country]);

  return (
    <div className="lineGraph">
      <h3 className="lineGraph__title">
        {country} new {casesType}
      </h3>
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
