
import { useMemo, useState, useCallback } from "react";

import { Table } from "../Table/Table";
import { TableControls } from "../Table/TableControls";
import { Instance } from "../types";
import { instancesTableColumns } from "./consts";

import styles from "./Dashboard.module.scss";

type Props = {
  instances: Instance[],
};

export default function Dashboard({ instances }: Props) {
  const data = useMemo(() => instances, [instances]);

  const columns = useMemo(() => instancesTableColumns, []);

  const [isEditMode, setEditMode] = useState(false);

  const toggleEditMode = useCallback(() => setEditMode((prevState) => !prevState), [
    setEditMode,
  ]);
  

  return (
    <div className={styles.tableWrap}>
      <TableControls toggleEditMode={toggleEditMode} isEditMode={isEditMode}></TableControls>
     <Table isEditMode={isEditMode} columns={columns} data={data} />
    </div>
  );
}
