import { useTable, useSortBy } from "react-table";
import { AssignButton } from "../Buttons/AssignButton";
import { StopButton } from "../Buttons/StopButton";

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
                if (cell.column.Cell === "Assignbutton") {
                  const currentTargetId = cell.row.values.targetId;
                  // TODO: Remove
                  const targetId = "111";
                  return (
                    <td {...cell.getCellProps()}>
                      {currentTargetId === "-1" ? (
                        <AssignButton
                          targetId={targetId}
                          instanceId={cell.value}
                          buttonState="button"
                        />
                      ) : (
                        <StopButton instanceId={cell.value} />
                      )}
                    </td>
                  );
                } else {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
