import React from "react";
import { DateTime } from "luxon";
import { HourlyCart } from "./index";

const WeatherDataHourly = ({ hourlyData }) => {
  const iconUrlCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="mx-4">
        <p className="uppercase text-white pb-2 border-b-[1px] border-white border-opacity-70 mt-3">
          Hourly ForeCast
        </p>
        <div className="flex justify-center mt-5">
          <HourlyCart
            IconCode={iconUrlCode}
            LocalTime={formatToLocalTime}
            hourlyData={hourlyData}
            timezone={hourlyData.city.timezone}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherDataHourly;
