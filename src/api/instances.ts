import { useFetch } from "./utils";

const fetchUrl = "http://localhost:3001/api/instances";

export function useFetchInstances() {
  const state = useFetch<any[]>(fetchUrl);
  return state;
}
