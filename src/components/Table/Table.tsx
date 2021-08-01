// @ts-nocheck

import { useTable, useSortBy, Row } from "react-table";
import { TableRow } from "./TableRow";

import "./Table.module.scss";

type Props = {
  columns: any;
  data: any;
  boolean;
  selectedInstances: array;
  setSelectedInstances: any;
};

export function Table({
  columns,
  data,
  selectedInstances,
  setSelectedInstances,
}: Props) {
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
        {rows.map((row: Row, i) => {
          prepareRow(row);
          return (
            <TableRow
              setSelectedInstances={setSelectedInstances}
              row={row}
              selectedInstances={selectedInstances}
            ></TableRow>
          );
        })}
      </tbody>
    </table>
  );
}
