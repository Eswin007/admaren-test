import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MarketCard = () => {
  return (
    <div className="market">
      <div className="market__summary">
        <div className="market__head">
          <div className="market__head-top">
            <div>Market</div>
            <div>Down</div>
          </div>
          <div className="market__trend">
            <div className="market__trend-arrow">
              <ArrowDropUpIcon fontSize="large" />
            </div> 
            <div className="market__value">15,580.11</div>
          </div>
        </div>
        <div className="market__summary-quick"></div>
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
