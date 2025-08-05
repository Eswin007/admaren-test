import { Close, Refresh } from "@mui/icons-material";
import React from "react";

const Statcard = ({
  title,
  overallVisits = "NA",
  todays = "NA",
  monthly = "NA",
  summary = "NA",
  percentage = "",
  type,
  className = "",
}) => {
  return (
    <div className={`stat-card ${type} ${className}`}>
      {title && (
        <div className="stat-card__header">
          <div className="stat-card__title">{title}</div>
          <div className="stat-card__control">
            <div>
              <Refresh fontSize="inherit" />
            </div>
            <div>
              <Close fontSize="inherit" />
            </div>
          </div>
        </div>
      )}
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
      <div className="stat-card__progressbar">
        <div
          className="stat-card__progress"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="stat-card__summary">
        {`${summary}% higher than last month`}
      </div>
    </div>
  );
};

export default Statcard;
