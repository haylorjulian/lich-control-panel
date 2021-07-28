import { useMemo } from "react";

import { Table } from "../Table/Table";
import { Instance } from "../types";
import { instancesTableColumns } from "./consts";

type Props = {
  instances: Instance[];
};

export default function Dashboard({ instances }: Props) {
  const data = useMemo(() => instances, [instances]);

  const columns = useMemo(() => instancesTableColumns, []);

  return <Table columns={columns} data={data} />;
}
