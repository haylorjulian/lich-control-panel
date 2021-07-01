import { Instance } from "../components/types";
import { useFetch } from "./utils";

const fetchUrl = "http://localhost:3001/api/instances";

export function useFetchInstances() {
  const state = useFetch<Instance[]>(fetchUrl);
  return state;
}
