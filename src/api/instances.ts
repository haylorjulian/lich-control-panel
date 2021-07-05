import { Instance } from "../components/types";
import { useFetch } from "./utils";
import axios, { AxiosRequestConfig } from "axios";

const fetchUrl = "http://localhost:3001/api/instances";

export function useFetchInstances() {
  const state = useFetch<Instance[]>(fetchUrl);
  return state;
}


export function reassignTarget(instanceId: number, targetId: number) {
  const putUrl = "http://localhost:3001/api/instances/" + instanceId;
  const updatedInstance = { targetId: 123 };
  axios.put(putUrl, updatedInstance).then(response => {
    console.log(response)
})
// const state = useFetch<Instance[]>(putUrl, updatedInstance);
// return state;
}
