import { ResponseData, DataForChart, ChartData } from "./types";

export const sortData = (data: ResponseData[]) =>
  data.slice().sort((a, b) => b.cases - a.cases);

type Cases = "cases" | "recovered" | "deaths";

// export const formatCartData = (
//   data: DataForChart,
//   casesType: Cases = "cases"
// ) => {
//   const chartData: ChartData = [];
//   let lastDatePoint: number;
//   Object.entries(data[casesType]).forEach(([date, value]) => {
//     if (lastDatePoint) {
//       const newDataPoint = {
//         x: date,
//         y: value - lastDatePoint,
//       };
//       chartData.push(newDataPoint);
//     }
//     lastDatePoint = data[casesType][date];
//   });
//   return chartData;
// };

export const formatCartData = (
  data: DataForChart,
  casesType: Cases = "cases"
) => {
  const chartData: ChartData = [];
  let lastDatePoint: number = 0;
  for (let date in data[casesType]) {
    if (lastDatePoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDatePoint,
      };
      chartData.push(newDataPoint);
    }
    lastDatePoint = data[casesType][date];
  }
  return chartData;
};
