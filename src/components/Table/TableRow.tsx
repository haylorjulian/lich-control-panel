// @ts-nocheck

// import { useTable, useSortBy, TableRowProps } from "react-table";

import { useState } from "react";

import styles from "./Table.module.scss";

export function TableRow({row, selectedInstances, setSelectedInstances} : Props) {

    const [isSelected, setAsSelected] = useState(false);

    function handleRowClick(selectedInstances, currentInstance) {
        if (selectedInstances.indexOf(currentInstance) > -1) {
          selectedInstances.splice(selectedInstances.indexOf(currentInstance), 1);
        } else {
          selectedInstances.push(currentInstance);
        }
        setAsSelected(isSelected => !isSelected);
        setSelectedInstances(selectedInstances);    
      }

    //   if (selectedInstances.indexOf(row.original._id) > -1) {
    //     setAsSelected(true);
    //   }
    
    
    return (
        <tr className={isSelected ? styles.selected : styles.deselected} onClick={() => handleRowClick(selectedInstances, row.original._id)} {...row.getRowProps()}>
        {row.cells.map((cell) => {
            return (
              <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
            );
        })}
      </tr>
    );
}