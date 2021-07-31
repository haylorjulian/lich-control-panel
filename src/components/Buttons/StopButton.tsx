// @ts-nocheck

import { assignInstance } from "../../api/instances";

type Props = {
  selectedInstances: string[];
};

export function StopButton({ selectedInstances }: Props) {
  function assignInstances(selectedInstances) {
    selectedInstances.forEach(instanceId => {
        assignInstance(instanceId, "-1")
    });
}
  return <button onClick={() => assignInstances(selectedInstances)}>Stop</button>;
}
