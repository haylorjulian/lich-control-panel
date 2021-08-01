import { Switch, Route } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";

import { useFetchInstances } from "../../api/instances";
import { useFetchPumps } from "../../api/pumps";
import { linkToCMC, linkToDashboard } from "./paths";
import { countPumps } from "../../api/utils/countPumps";

export function Routes() {
  const { data: instances, isFetched } = useFetchInstances();
  const { data: pumpReports } = useFetchPumps();

  const instancesWithPumpsCount = instances?.map((instance) => {
    const matchingPumpReports = pumpReports?.filter(
      (report) =>
        report.instanceId === instance._id &&
        report.targetId === instance.targetId
    );
    const pumpsCount = countPumps(matchingPumpReports!);
    return { ...instance, pumpsCount };
  });
  

  return (
    <Switch>
      <Route path={linkToCMC}>
        <h1>CMC Trends</h1>
      </Route>
      <Route path={linkToDashboard}>
        {isFetched ? (
          <Dashboard instances={instancesWithPumpsCount!}></Dashboard>
        ) : null}
      </Route>
    </Switch>
  );
}
