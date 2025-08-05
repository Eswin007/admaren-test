import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Topbar from "./components/Topbar";
import "./styles/main.scss";
import Statcard from "./components/StatCard";

function App() {
  return <div>
    <Topbar />
    <Statcard title="Overall Sales" type='overallRatings' />
  </div>;
}

export default App;
