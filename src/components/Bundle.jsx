import React from "react";
import { Close, Refresh } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import bgImage from "../assets/images/tile-bg.jpg";
import profileImg from "../assets/images/profile.jpg";

const Bundle = () => {
  return (
    <div className="bundle">
      <div className="bundle__bg">
        <img src={bgImage} alt="" />
      </div>
      <div className="bundle__control">
        <div>
          <Refresh fontSize="inherit" />
        </div>
        <div>
          <Close fontSize="inherit" />
        </div>
      </div>

      <div className="bundle__box box">
        <div className="box__pin">
          <LocationOnRoundedIcon />
        </div>
        <div className="box__date">21 Jan</div>
        <div className="box__title">
          New Year <span>UI Bundle</span> now on webarch
        </div>
        <div className="box__details">
          <div className="box__detail">
            <span>204</span> Comments
          </div>
          <div className="box__detail">
            <span>24k</span> Likes
          </div>
        </div>
      </div>

      <div className="bundle__footer">
        <div className="chips">
          <div className="chip">#citymax</div>
          <div className="chip">#new york city</div>
          <div className="chip">#amazing</div>
        </div>
        <div className="bundle__names">
          <span>Jane Smith, John Smith, David Jester, pepper</span> and 214
          others like this.
        </div>

        <div className="cta">
          <div className="cta__profile">
            <img src={profileImg} alt="" />
          </div>
          <div className="cta__field">
            <input placeholder="Write a Comment" type="text" />
          </div>
          <button className="cta__btn">Join Group</button>
        </div>
      </div>
    </div>
  );
};

export default Bundle;
