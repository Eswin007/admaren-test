import React from "react";
import { HOURLY_WEATHER, WEATHER_DATA } from "../data/data";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import WbCloudyRoundedIcon from "@mui/icons-material/WbCloudyRounded";

const WeekItem = ({ day, status, temp }) => {
  return (
    <div className="week">
      <div className="week__day">{day}</div>
      <div className="week__status">{status}</div>
      <div className="week__temp">
        {temp}
        <span>C&deg;</span>
      </div>
    </div>
  );
};

const HourlyWeather = ({ time, half, status, temp }) => {
  return (
    <div className="hourly">
      <div className="hourly__time">{time}</div>
      <div className="hourly__half">{half}</div>
      <div className="hourly__status">{status}</div>
      <div className="hourly__temp">{temp}&deg;</div>
    </div>
  );
};

const WeatherWidget = () => {
  return (
    <div className="weather">
      <div className="weather__title">California USA</div>
      <div className="weather__now">
        <div className="weather__day">Sunday</div>
        <div className="weather__temp">32&deg;</div>
        <div className="weather__status">Partly Cloudy</div>
        <div className="weather__quick">
          <div className="weather__status-current">
            <WbSunnyRoundedIcon fontSize="inherit" />
          </div>
          <div className="weather__extra">
            <AirRoundedIcon />
            <div>
              54 <div>MPH</div>
            </div>
          </div>
          <div className="weather__extra">
            <ThunderstormRoundedIcon />
            <div>
              53 <div>MM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="weather__today">
        {HOURLY_WEATHER?.map((hourly) => {
          let statusIcon;
          if (hourly.status === "rainy") {
            statusIcon = <ThunderstormRoundedIcon />;
          } else if (hourly.status === "cloudy") {
            statusIcon = <WbCloudyRoundedIcon />;
          } else if (hourly.status === "sunny") {
            statusIcon = <WbSunnyRoundedIcon />;
          }
          return (
            <HourlyWeather
              time={hourly.time}
              half={hourly.half}
              status={statusIcon}
              temp={hourly.temp}
            />
          );
        })}
      </div>
      <div className="weather__week-list">
        {WEATHER_DATA.map((item) => {
          let statusIcon;
          if (item.status === "rainy") {
            statusIcon = <ThunderstormRoundedIcon />;
          } else if (item.status === "cloudy") {
            statusIcon = <WbCloudyRoundedIcon />;
          } else if (item.status === "sunny") {
            statusIcon = <WbSunnyRoundedIcon />;
          }
          return (
            <WeekItem day={item.day} status={statusIcon} temp={item.temp} />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherWidget;
