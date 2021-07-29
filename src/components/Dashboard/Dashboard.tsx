import { useMemo } from "react";

import { Table } from "../Table/Table";
import { TableControls } from "../Table/TableControls";
import { Instance } from "../types";
import { instancesTableColumns } from "./consts";

import styles from "./Dashboard.module.scss";

console.log(styles);


type Props = {
  instances: Instance[];
};

export default function Dashboard({ instances }: Props) {
  const data = useMemo(() => instances, [instances]);

  const columns = useMemo(() => instancesTableColumns, []);

  return (
    <div className={styles.tablewrap}>
      <TableControls></TableControls>
     <Table columns={columns} data={data} />
    </div>
  );
}
