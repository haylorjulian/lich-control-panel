import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.scss";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
