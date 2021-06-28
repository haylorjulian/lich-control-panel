// @ts-nocheck

import React, { useState } from "react";
// import { instances } from "../mockdata";

import styles from "./Dashboard.module.scss";

type Instance = {
  id: number;
  name: string;
  ip: string;
  service: string;
  status: string;
  targetId: string;
  pumpsCount: number;
  cmcRank: number;
};

type Props = {
  instances: any;
};

export default function Dashboard({ instances }: Props | null) {
  // Type check
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  let sortedInstances = instances;
  sortedInstances?.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  return (
    <div className={styles.dashwrap}>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>
              <button type="button" onClick={() => requestSort("name")}>
                Name
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort("ip")}>
                IP
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort("service")}>
                Service
              </button>
            </th>
            {/* <th>
              <button type="button" onClick={() => requestSort("status")}>
                Status
              </button>
            </th> */}
            <th>
              <button type="button" onClick={() => requestSort("targetId")}>
                Target coin
              </button>
            </th>
            {/* <th>
              <button type="button" onClick={() => requestSort("pumpsCount")}>
                No. Pumps
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort("cmcRank")}>
                CMC Ranking
              </button>
            </th> */}
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {instances?.map((instance) => (
            <tr key={instance._id}>
              <td>{instance.name}</td>
              <td>{instance.ip}</td>
              <td>{instance.service}</td>
              {/* <td>{instance.status}</td> */}
              <td>{instance.targetId}</td>
              {/* <td>{instance.pumpsCount}</td> */}
              {/* <td>{instance.cmcRank}</td> */}
              <td>
                {/* <button
                  className={
                    instance.status === "Pumping"
                      ? styles.stop
                      : styles.reassign
                  }
                >
                  {instance.status === "Pumping" ? "Stop" : "Reassign"}
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
