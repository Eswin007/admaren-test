import React from "react";
import MapImg from "../assets/images/map.jpg";
import Searchbar from "./other/Searchbar";
import Statcard from "./StatCard";
const Map = ({ className = "" }) => {
  return (
    <div className={`map ${className}`}>
      <div className="map__img">
        <img src={MapImg} alt="" />
      </div>
      <div className="map__control">
        <div className="map__label">Quick View</div>
        <Searchbar icon={false} placeholder="Search" className="map__search" />

        <Statcard
          className="map__stat"
          overallVisits="2415"
          todays="751"
          monthly="1547"
          percentage="80"
          summary="45"
          //   title={stat.title}
        />
      </div>
    </div>
  );
};

export default Map;
