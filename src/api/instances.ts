import { Instance } from "../components/types";
import { useFetch } from "./utils/useFetch";
import axios from "axios";

const fetchUrl = "http://localhost:3001/api/instances";

export function useFetchInstances() {
  const state = useFetch<Instance[]>(fetchUrl);
  return state;
}

export async function assignInstance(instanceId: string, targetId: string) {
  const putUrl = "http://localhost:3001/api/instances/" + instanceId;
  try {
    const response = await axios.put(putUrl, { targetId });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
