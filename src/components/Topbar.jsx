import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatIcon from "@mui/icons-material/Chat";
import TuneIcon from "@mui/icons-material/Tune";
import profileImage from "../assets/images/profile.jpg";
import Searchbar from "./other/Searchbar";

const Topbar = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <button type="button" className="header__burger-menu header-link">
          <MenuIcon/>
        </button>
        <button type="button" className="header__reload header-link">
          <RefreshIcon />
        </button>
        <button type="button" className="header__grid header-link">
          <AppsIcon />
        </button>
        <div className="v-line"></div>
        <button
          type="button"
          className="header__bell circle-status header-link"
        >
          <NotificationsNoneIcon />
        </button>
       <Searchbar className="header__searchbar" placeholder="Search dashboard"/>
      </div>

      <div className="header__profile profile">
        <div className="profile__img-wrap circle-status">
          <img
            src={profileImage}
            alt="profile-image"
            className="profile__img"
          />
        </div>
      </div>
      <div className="header__filter filter header-link">
        <button className="filter__icon">
          <TuneIcon />
        </button>
        <div className="filter__panel"></div>
      </div>
      <div className="v-line"></div>
      <button className="header__chat header-link">
        <ChatIcon />
      </button>
    </header>
  );
};

export default Topbar;
