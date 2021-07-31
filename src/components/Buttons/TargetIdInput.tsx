// @ts-nocheck

import { useState } from "react";
import { assignInstance } from "../../api/instances";

export function TargetIdInput({selectedInstances} : Props) {
    const [newTargetId, setNewTargetId] = useState('');
    function assignInstances(selectedInstances) {
        selectedInstances.forEach(instanceId => {
            assignInstance(instanceId, newTargetId)
        });
    }
    function handleTargetIdChange(event) {
        setNewTargetId(event.target.value);
    }
    return (
    <div>
        <input onChange={handleTargetIdChange} placeholder="Enter a new targetId" type="text" name="targetId" id="targetId"></input>
        <button onClick={() => assignInstances(selectedInstances)}>Assign</button>
    </div>
    );
  }