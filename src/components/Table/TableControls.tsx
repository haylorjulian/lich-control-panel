// @ts-nocheck

import { BulkSelectButton } from "../Buttons/BulkSelectButton";
import { StopButton } from "../Buttons/StopButton";
import { TargetIdInput } from "../Buttons/TargetIdInput";

import styles from "./TableControls.module.scss";

type Props = {
    toggleEditMode: () => void,
    isEditMode: boolean,
    selectedInstances: Array,
    setSelectedInstances: any
}

export function TableControls({toggleEditMode, isEditMode, selectedInstances, setSelectedInstances} : Props) {

    console.log(toggleEditMode);
    
    
      return (
        <div>
            <BulkSelectButton toggleEditMode={toggleEditMode} isEditMode={isEditMode}/>
            <button className>Select all</button>
            <StopButton instanceId={'111'} />
            <TargetIdInput selectedInstances={selectedInstances}/>
        </div>
      );
  }