import React from "react";

import styles from "./Dashboard.module.scss";

const rdps = [
  {
    _id: {
      $oid: "60b93e559d78049ebd05619a",
    },
    name: "Alpha01",
    ip: "84.252.94.172",
    service: "https://operavps.com/",
    status: "Pumping",
    target: "HODL",
    pumps: "500",
    ranking: "5",
    user: {
      $oid: "60b177c1c9ab810727d9743b",
    },
    createdAt: {
      $date: "2021-06-03T20:40:53.717Z",
    },
    updatedAt: {
      $date: "2021-06-03T20:40:53.717Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60b93e889d78049ebd05619b",
    },
    name: "Alpha02",
    ip: "89.238.170.240",
    service: "operavps.com",
    status: "Idle",
    target: "HODL",
    pumps: "500",
    ranking: "5",
    user: {
      $oid: "60b177c1c9ab810727d9743b",
    },
    createdAt: {
      $date: "2021-06-03T20:41:44.138Z",
    },
    updatedAt: {
      $date: "2021-06-03T20:41:44.138Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60b93eb29d78049ebd05619c",
    },
    name: "Alpha03",
    ip: "146.70.20.240",
    service: "https://operavps.com/",
    status: "Pumping",
    target: "HODL",
    pumps: "500",
    ranking: "5",
    user: {
      $oid: "60b177c1c9ab810727d9743b",
    },
    createdAt: {
      $date: "2021-06-03T20:42:26.133Z",
    },
    updatedAt: {
      $date: "2021-06-03T20:42:26.133Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60b93ed49d78049ebd05619d",
    },
    name: "Alpha04",
    ip: "146.70.20.214",
    service: "https://operavps.com/",
    status: "Pumping",
    target: "HODL",
    pumps: "500",
    ranking: "5",
    user: {
      $oid: "60b177c1c9ab810727d9743b",
    },
    createdAt: {
      $date: "2021-06-03T20:43:00.178Z",
    },
    updatedAt: {
      $date: "2021-06-03T20:43:00.178Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60b93f249d78049ebd05619e",
    },
    name: "Alpha05",
    ip: "84.252.95.251",
    service: "https://operavps.com/",
    status: "Pumping",
    target: "HODL",
    pumps: "500",
    ranking: "5",
    user: {
      $oid: "60b177c1c9ab810727d9743b",
    },
    createdAt: {
      $date: "2021-06-03T20:44:20.987Z",
    },
    updatedAt: {
      $date: "2021-06-03T20:44:20.987Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60b93f3f9d78049ebd05619f",
    },
    name: "Alpha06",
    ip: "37.120.233.94",
    service: "https://operavps.com/",
    status: "Pumping",
    target: "HODL",
    pumps: "500",
    ranking: "5",
    user: {
      $oid: "60b177c1c9ab810727d9743b",
    },
    createdAt: {
      $date: "2021-06-03T20:44:47.491Z",
    },
    updatedAt: {
      $date: "2021-06-03T20:44:47.491Z",
    },
    __v: 0,
  },
];

export default function Dashboard() {
  return (
    <div className={styles.dashwrap}>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>IP</th>
            <th>Service</th>
            <th>Status</th>
            <th>Target</th>
            <th>No. Pumps</th>
            <th>CMC Ranking</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {rdps.map((rdp) => (
            <tr key={rdp._id.$oid}>
              <td>{rdp.name}</td>
              <td>{rdp.ip}</td>
              <td>{rdp.service}</td>
              <td>{rdp.status}</td>
              <td>{rdp.target}</td>
              <td>{rdp.pumps}</td>
              <td>{rdp.ranking}</td>
              <td>
                <button
                  className={
                    rdp.status === "Pumping" ? styles.stop : styles.reassign
                  }
                >
                  {rdp.status === "Pumping" ? "Stop" : "Reassign"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
