// @ts-nocheck
import { useMemo, useState } from "react";

import { Table } from "../Table/Table";
import { TableControls } from "../Table/TableControls";
import { Instance } from "../types";
import { instancesTableColumns } from "./consts";

import styles from "./Dashboard.module.scss";

type Props = {
  instances: Instance[];
};

export default function Dashboard({ instances }: Props) {
  const data = useMemo(() => instances, [instances]);

  const allInstanceIds = data.map((instance) => instance._id);

  const columns = useMemo(() => instancesTableColumns, []);

  const [selectedInstances, setSelectedInstances] = useState([]);

  return (
    <div className={styles.tableWrap}>
      <TableControls
        allInstanceIds={allInstanceIds}
        selectedInstances={selectedInstances}
        setSelectedInstances={setSelectedInstances}
      ></TableControls>
      <Table
        selectedInstances={selectedInstances}
        setSelectedInstances={setSelectedInstances}
        columns={columns}
        data={data}
      />
    </div>
  );
}
