import { PumpReport } from "../../components/types";

export function countPumps(pumpReports: PumpReport[]) {
  const numberOfPumps = pumpReports?.reduce(
    (accumulator: number, currentValue: PumpReport) => {
      accumulator += currentValue.numberOfPumps;
      return accumulator;
    },
    0
  );

  return numberOfPumps;
}
