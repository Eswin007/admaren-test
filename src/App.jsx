import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Topbar from "./components/Topbar";
import "./styles/main.scss";
import Statcard from "./components/StatCard";
import { STATS_DATA } from "./data/data";
import Map from "./components/Map";
import SaleCard from "./components/SaleCard";
import MarketCard from "./components/MarketCard";

function App() {
  return (
    <div>
      <Topbar />
      <div className="dashboard-grid-wrap">
        {STATS_DATA?.map((stat) => {
          return (
            <Statcard
              overallVisits={stat.overallVisits}
              todays={stat.todays}
              monthly={stat.monthly}
              type={stat.type}
              percentage={stat.percentage}
              title={stat.title}
              summary={stat.summary}
            />
          );
        })}
        <Map />
        <SaleCard />
        <MarketCard />
      </div>
    </div>
  );
}

export default App;
