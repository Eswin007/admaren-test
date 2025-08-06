import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import profileImg from "../assets/images/profile.jpg";
import fractionImg from "../assets/images/fraction_.png";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";

const Fraction = () => {
  return (
    <div className="fraction-wrap">
      <div className="fraction fraction1">
        <div className="fraction1__pin">
          <LocationOnRoundedIcon />
        </div>
        <div className="fraction1__date">21 Jan</div>
        <div className="fraction1__title">
          New Year <span>UI Bundle</span> now on webarch
        </div>
      </div>

      <div className="fraction2">
        <div className="fraction2__header">
          <div className="fraction2__profile">
            <img src={profileImg} alt="" />
          </div>
          <div className="fraction2__name">
            <div>David Cooper</div>
            <span>@ Revox</span>
          </div>
        </div>
        <div className="fraction2__footer">
          “Just <span>Completed</span> the <span>Heart walk </span>advertiing
          campaign”
        </div>
      </div>

      <div className="fraction3">
        <div className="fraction3__header">
          15% <MovingOutlinedIcon fontSize="inherit" />
        </div>
        <div className="fraction3__footer">
          <div className="fraction3__detail">
            <p>Webarch Dashboard</p>
            <div>
              <span>2,567USD</span>
              <span>2%</span>
            </div>
          </div>
          <div className="fraction3__detail">
            <p>Frontend Design</p>
            <div>
              <span>1,420USD</span>
              <span>1%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fraction4">
        <img src={fractionImg} alt="" />
      </div>
    </div>
  );
};

export default Fraction;
