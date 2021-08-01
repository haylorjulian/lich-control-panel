import styles from "./Table.module.scss";

type Props = {
  row: any;
  selectedInstances: string[];
  setSelectedInstances: any;
};

export function TableRow({
  row,
  selectedInstances,
  setSelectedInstances,
}: Props) {
  const isSelected = selectedInstances.includes(row.original._id);

  function handleClick() {
    if (isSelected) {
      const index = selectedInstances.indexOf(row.original._id);
      const filtered = selectedInstances.filter((_, i) => i !== index);
      setSelectedInstances(filtered);
    } else {
      setSelectedInstances([...selectedInstances, row.original._id]);
    }
  }

  return (
    <tr
      className={isSelected ? styles.selected : styles.deselected}
      onClick={handleClick}
      {...row.getRowProps()}
    >
      {row.cells.map((cell: any) => {
        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
      })}
    </tr>
  );
}
