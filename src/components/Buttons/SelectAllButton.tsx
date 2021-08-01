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
  return (
    <button
      onClick={() =>
        selectedInstances.length === allInstanceIds.length
          ? setSelectedInstances([])
          : setSelectedInstances(allInstanceIds)
      }
    >
      Select all
    </button>
  );
}
