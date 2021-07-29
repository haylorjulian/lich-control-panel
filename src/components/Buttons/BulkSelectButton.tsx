// @ts-nocheck

export function BulkSelectButton({toggleEditMode, isEditMode} : Props) {
    
    return (
    <button onClick={() => toggleEditMode()}>Bulk select</button>
    );
  }