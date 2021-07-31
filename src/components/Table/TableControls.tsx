// @ts-nocheck

import { StopButton } from "../Buttons/StopButton";
import { SelectAllButton } from "../Buttons/SelectAllButton";
import { TargetIdInput } from "../Buttons/TargetIdInput";

import styles from "./TableControls.module.scss";

type Props = {
    selectedInstances: string[],
    setSelectedInstances: any,
    allInstanceIds: string[]
}

export function TableControls({selectedInstances, setSelectedInstances, allInstanceIds} : Props) {
    
    console.log(selectedInstances);
    
      return (
        <div styles={styles.tableControls}>
            <SelectAllButton allInstanceIds={allInstanceIds} setSelectedInstances={setSelectedInstances} selectedInstances={selectedInstances}></SelectAllButton>
            <StopButton selectedInstances={selectedInstances} />
            <TargetIdInput selectedInstances={selectedInstances}/>
        </div>
      );
  }