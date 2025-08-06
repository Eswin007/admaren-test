import React from "react";
import Map from "../components/Map";
import SaleCard from "../components/SaleCard";
import Bundle from "../components/Bundle";
import Fraction from "../components/Fraction";
import MarketCard from "../components/MarketCard";
import WeatherWidget from "../components/WeatherWidget";
import { STATS_DATA } from "../data/data";
import Statcard from "../components/StatCard";

const Dashboard = () => {
  return (
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
      <Bundle />
      <Fraction />
      <MarketCard />
      <WeatherWidget />
    </div>
  );
};

export default Dashboard;
