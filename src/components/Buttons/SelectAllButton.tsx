// @ts-nocheck

type Props = {
  selectedInstances: string[];
  allInstanceIds: string[];
  setSelectedInstances: any;
};

export function SelectAllButton({ allInstanceIds, setSelectedInstances, selectedInstances }: Props) {

    
  return <button onClick={() => selectedInstances.length > -1 ? setSelectedInstances(allInstanceIds) : setSelectedInstances([])}>Select all</button>;
}