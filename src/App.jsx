import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Topbar from "./components/Topbar";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <Topbar />
      <Dashboard />
    </div>
  );
}

export default App;
