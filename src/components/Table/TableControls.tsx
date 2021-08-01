// @ts-nocheck

import { StopButton } from "../Buttons/StopButton";
import { SelectAllButton } from "../Buttons/SelectAllButton";
import { TargetIdInput } from "../Buttons/TargetIdInput";

import styles from "./TableControls.module.scss";

type Props = {
  selectedInstances: string[];
  setSelectedInstances: () => void;
  allInstanceIds: string[];
};

export function TableControls({
  selectedInstances,
  setSelectedInstances,
  allInstanceIds,
}: Props) {
  return (
    <div className={styles.tableControls}>
      <SelectAllButton
        allInstanceIds={allInstanceIds}
        setSelectedInstances={setSelectedInstances}
        selectedInstances={selectedInstances}
      ></SelectAllButton>
      <StopButton selectedInstances={selectedInstances} />
      <TargetIdInput selectedInstances={selectedInstances} />
    </div>
  );
}
