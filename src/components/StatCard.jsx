import { Close, Refresh } from "@mui/icons-material";
import React from "react";

const Statcard = ({title, overallVisits=0, todays=0, monthly=0, progress=0, percentage=0, type}) => {
  return <div className={`stat-card ${type}`}>
    <div className="stat-card__header">
      <div className="stat-card__title">{title}</div>
      <div className="stat-card__control">
        <button><Refresh fontSize="small" /></button>
        <button><Close fontSize="small"/></button>
      </div>
    </div>
      <div className="stat-card__stats-wrap">
        <div className="stat-card__stat">
          <div>Overall Visits</div>
          <div>{overallVisits}</div>
        </div>
        <div className="stat-card__stat">
          <div>Today's</div>
          <div>{todays}</div>
        </div>
        <div className="stat-card__stat">
          <div>Monthly</div>
          <div>{monthly}</div>
        </div>
      </div>
        <div className="stat-card__progressbar" data-progress={progress}></div>
        <div className="stat-card__summary">
           {`${percentage}% higher than last month`}
        </div>
  </div>;
};

export default Statcard;
