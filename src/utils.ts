import { ResponseData } from "./types";

export const sortData = (data: ResponseData[]) =>
  data.slice().sort((a, b) => b.cases - a.cases);
