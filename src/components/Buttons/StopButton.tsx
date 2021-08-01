// @ts-nocheck

import { assignInstance } from "../../api/instances";

import styles from "../Table/TableControls.module.scss";

type Props = {
  selectedInstances: string[];
};

export function StopButton({ selectedInstances }: Props) {
  function assignInstances(selectedInstances) {
    selectedInstances.forEach((instanceId) => {
      assignInstance(instanceId, "-1");
    });
  }

  return (
    <button
      className={styles.stop}
      onClick={() => assignInstances(selectedInstances)}
    >
      Stop
    </button>
  );
}
