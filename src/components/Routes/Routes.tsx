import { Switch, Route } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";

import { useFetchInstances } from "../../api/instances";
import { linkToCMC, linkToDashboard } from "./paths";

export function Routes() {
  const { data: instances, isFetched } = useFetchInstances();
  return (
    <Switch>
      <Route path={linkToCMC}>
        <h1>CMC Trends</h1>
      </Route>
      <Route path={linkToDashboard}>
        {isFetched ? <Dashboard instances={instances!}></Dashboard> : null}
      </Route>
    </Switch>
  );
}
