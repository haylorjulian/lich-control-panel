import { Instance } from "../components/types";
import { useFetch } from "./utils";
import axios from "axios";

const fetchUrl = "http://localhost:3001/api/instances";

export function useFetchInstances() {
  const state = useFetch<Instance[]>(fetchUrl);
  return state;
}


export async function reassignTarget(instanceId: number, targetId: number) {
  const putUrl = "http://localhost:3001/api/instances/" + instanceId;
  const updatedInstance = { targetId: targetId };
  try {
    const response = await axios.put(putUrl, updatedInstance);
    console.log(response); 
  } catch(e) {
    console.log(e);
  }
// const state = useFetch<Instance[]>(putUrl, updatedInstance);
// return state;
}
