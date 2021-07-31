// @ts-nocheck

import { useTable, useSortBy } from "react-table";

import styles from "./Table.module.scss";

export function Table({ columns, data, isEditMode, selectedInstances, setSelectedInstances }: { columns: any; data: any; isEditMode: boolean, selectedInstances: array, setSelectedInstances: any}) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );


    function handleRowClick(selectedInstances, currentInstance, editable) {
      if (editable) {
      if (selectedInstances.indexOf(currentInstance) > -1) {
        selectedInstances.splice(selectedInstances.indexOf(currentInstance), 1);
      } else {
        selectedInstances.push(currentInstance);
      }
      setSelectedInstances(selectedInstances);
    }
    }

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          console.log(row);
          
          prepareRow(row);

          return (
            <tr onClick={() => handleRowClick(selectedInstances, row.original._id, isEditMode)} className={isEditMode ? styles.editMode : styles.viewMode } {...row.getRowProps()}>
              {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
