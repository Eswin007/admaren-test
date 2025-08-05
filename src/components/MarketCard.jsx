import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MarketCard = () => {
  return (
    <div className="market">
      <div className="market__summary">
        <div className="market__head">
          <h5>Market</h5>
          <h5>Down</h5>
          <h2>
            <ArrowDropUpIcon fontSize="large" /> 15580.11
          </h2>
        </div>
      </div>
      <div className="market__chart"></div>
      <div className="market__list-wrap">
        <div className="market__list-label"></div>
        <div className="market__search"></div>
        <div className="market__list"></div>
      </div>
    </div>
  );
};

export default MarketCard;
