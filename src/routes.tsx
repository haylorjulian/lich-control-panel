import React from 'react';

import {Switch, Route, Link} from 'react-router-dom'

import Dashboard from './components/Dashboard'

import styles from "./components/Routes.module.scss";

export default function Routes(){
    return (
          <div className={styles.routewrap}>
          <div className={styles.header}>
            <p className={styles.title}>Lich Dashboard</p>
            <nav>
              <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
                <li>
                  <Link to="/cmc-trends" >CMC Trends</Link>
                </li>
              </ul>
            </nav>
            </div>

            <Switch>
              <Route path="/cmc-trends">
                <h1>CMC Trends</h1>
              </Route>
              <Route path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <Route path="/login">
                <h1>Login</h1>
              </Route>
            </Switch>
          </div>

      );
    }
