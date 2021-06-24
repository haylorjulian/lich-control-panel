import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'
import "./components/index.scss";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
