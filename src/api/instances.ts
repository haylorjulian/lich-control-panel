import { Instance } from "../components/types";
import { useFetch } from "./utils/useFetch";
import axios from "axios";
import { routes } from "./consts";

export function useFetchInstances() {
  const state = useFetch<Instance[]>(routes.INSTANCES);
  return state;
}

export async function assignInstance(instanceId: string, targetId: string) {
  const putUrl = routes.INSTANCES + instanceId;
  try {
    const response = await axios.put(putUrl, { targetId });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
