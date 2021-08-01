// @ts-nocheck

type Props = {
  selectedInstances: string[];
  allInstanceIds: string[];
  setSelectedInstances: any;
};

export function SelectAllButton({
  allInstanceIds,
  setSelectedInstances,
  selectedInstances,
}: Props) {
  var allInstancesSelected = selectedInstances.length === allInstanceIds.length;
  return (
    <button
      onClick={() =>
        
        allInstancesSelected ? setSelectedInstances([])
          : setSelectedInstances(allInstanceIds)
      }
    >
      {allInstancesSelected ? "Deselect all" : "Select all"}
    </button>
  );
}
