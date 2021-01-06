import React, { useEffect, useState } from "react";
import "./LineGraph.scss";

import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { ChartData, DataForChart } from "../../types";
import { formatCartData } from "../../utils";
import { CardContent } from "@material-ui/core";

interface Props {}

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
          format: "MM/DD/YY",
          tooltipFormat: "ll",
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

const LineGraph = () => {
  const [data, setData] = useState<ChartData>({} as ChartData);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
        );
        if (response.ok) {
          const data = (await response.json()) as DataForChart;
          setData(formatCartData(data));
        }
      } catch (e) {}
    };

    let isCancel = false;
    if (!isCancel) {
      getData();
    }

    return () => {
      isCancel = true;
    };
  }, []);

  return (
    <div className="lineGraph">
      <h3>Worldwide new cases</h3>
      {Object.keys(data).length > 0 ? (
        <Line
          data={{
            datasets: [
              {
                data,
                backgroundColor: "rgba(264, 12, 47, 0.5)",
                borderColor: "#cc1034",
              },
            ],
          }}
          options={options}
        />
      ) : null}
      {/*<Line data={data} />*/}
    </div>
  );
};

export default LineGraph;
