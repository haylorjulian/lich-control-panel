import React from 'react';

import {Switch, Route, Link} from 'react-router-dom'

export default function Routes(){
    return (

          <div>
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


            <Switch>
              <Route path="/cmc-trends">
                <h1>CMC Trends</h1>
              </Route>
              <Route path="/dashboard">
                <h1>Dashboard</h1>
              </Route>
              <Route path="/login">
                <h1>Login</h1>
              </Route>
            </Switch>
          </div>

      );
    }
