import { useTable, useSortBy } from "react-table";
import { reassignTarget } from "../../api/instances";

import "./Table.module.scss";


export function Table({ columns, data }: { columns: any; data: any }) {
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
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                console.log(cell);
                
                if (cell.column.Header === "Modify") {
                  const targetId = cell.row.values.targetId;
                  return <td {...cell.getCellProps()}><button onClick={(event: React.MouseEvent<HTMLElement>) => {targetId === "-1" ? reassignTarget(cell.value, -1) : reassignTarget(cell.value, -1)}}>{targetId === "-1" ? "Assign" : "Stop"}</button></td>
                } else {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
