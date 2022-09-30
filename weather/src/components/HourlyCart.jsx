import React from "react";

const HourlyCart = ({ LocalTime, IconCode, hourlyData, timezone }) => {
  return (
    <div className="text-white flex gap-[.5rem] sm:gap-[5rem] items-center">
      {hourlyData.list.map((item, idx) => (
        <div className="flex flex-col items-center">
          <p className="text-sm">{LocalTime(item.dt, timezone, "hh:mm a")}</p>
          <img
            src={IconCode(item.weather[0].icon)}
            alt="icons"
            className="w-[3rem] sm:w-[5rem] md:w-[10rem]"
          />
          <p>{item.main.temp}°</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyCart;
