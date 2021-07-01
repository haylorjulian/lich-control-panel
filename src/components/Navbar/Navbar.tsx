import { Link } from "react-router-dom";
import { linkToCMC, linkToDashboard } from "../Routes/paths";

import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Lich Dashboard</p>
      <nav>
        <ul>
          <li>
            <Link to={linkToDashboard}>Dashboard</Link>
          </li>
          <li>
            <Link to={linkToCMC}>CMC Trends</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
