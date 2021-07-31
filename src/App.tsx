import { BrowserRouter as Router } from "react-router-dom";
import useToken from "./api/utils/useToken";
import { Routes } from "./components";
import Login from "./components/Login/Login";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.scss";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
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
