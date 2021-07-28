import { useFetch } from "./utils/useFetch";
import { countPumps } from "./utils/countPumps";
import { PumpReport } from "../components/types";

const fetchUrl = "http://localhost:3001/api/pumps/";

export function useFetchPumps() {
  const state = useFetch<PumpReport[]>(fetchUrl);
  return state;
}

export function useFetchPumpsByIDs(targetId: string, instanceId: string) {
  const uri = `${fetchUrl + targetId}/${instanceId}`;
  const state = useFetch<PumpReport[]>(uri);
  return state;
}

export function useFetchNumberOfPumps(targetId: string, instanceId: string) {
  const { data: pumpReports } = useFetchPumpsByIDs(targetId, instanceId);
  return pumpReports ? countPumps(pumpReports) : null;
}
