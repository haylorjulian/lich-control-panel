// @ts-nocheck

import { useTable, useSortBy, TableRowProps } from "react-table";
import { TableRow } from "./TableRow";

import "./Table.module.scss";

export function Table({ columns, data, selectedInstances, setSelectedInstances }: { columns: any; data: any; boolean, selectedInstances: array, setSelectedInstances: any}) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

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
            <TableRow setSelectedInstances={setSelectedInstances} row={row} selectedInstances={selectedInstances}></TableRow>
          );
        })}
      </tbody>
    </table>
  );
}
