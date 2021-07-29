// @ts-nocheck

import { BulkSelectButton } from "../Buttons/BulkSelectButton";

type Props = {
    toggleEditMode: () => void,
    isEditMode: boolean,
}

export function TableControls({toggleEditMode, isEditMode} : Props) {

    console.log(toggleEditMode);
    
    
      return (
        <div>
            <button>Select all</button>
            <BulkSelectButton toggleEditMode={toggleEditMode} isEditMode={isEditMode}/>
        </div>
      );
  }