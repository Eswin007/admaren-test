import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { MARKET_DATA } from "../data/data";
import Searchbar from "./other/Searchbar";

const MarketListItem = ({
  label1,
  label2,
  value,
  chipValue,
  negativeValue,
}) => {
  return (
    <div className="market-list-item">
      <div className="label1">{label1}</div>
      <div className="label2">{label2}</div>
      <div className="value">{value}</div>
      <div className={`chip-value ${negativeValue ? "minus" : ""}`}>
        {chipValue}
      </div>
    </div>
  );
};

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
        <div className="market__summary-quick">
          <div>
            <label htmlFor="">Open</label>
            <span>16:203.26</span>
          </div>

          <div>
            <label htmlFor="">Day Range</label>
            <span>15,568.11-16,203.25</span>
          </div>
        </div>
      </div>
      <div className="market__chart"></div>
      <div className="market__list-wrap">
        <div className="market__list-label">Watchlist</div>
        <Searchbar
          className="market__search"
          placeholder="Search"
          icon={false}
        />
        <div className="market__list">
          {MARKET_DATA?.map((item) => {
            const negativeValue = `${item.chipValue}`[0] === "-";
            return (
              <MarketListItem
                label1={item.label1}
                label2={item.label2}
                value={item.value}
                chipValue={item.chipValue}
                negativeValue={negativeValue}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
