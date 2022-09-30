import React from "react";
import { WeatherDetails } from "./index";
import { DateTime } from "luxon";

const WeatherData = ({ weatherData }) => {
  const iconUrlCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex">
          <p className="font-semibold text-white">
            <span className="text-2xl">{weatherData.name}</span>,{" "}
            <span className="text-xl">{weatherData.sys.country}</span>
          </p>
        </div>
        <div className="mt-5">
          <div className="flex flex-col items-center">
            <p className="text-xl">{weatherData.weather[0].main}</p>
            <img
              src={iconUrlCode(weatherData.weather[0].icon)}
              alt="icon"
              className="h-[5rem]"
            />
            <p className="text-5xl text-white">
              {(((weatherData.main.temp - 32) * 5) / 9).toString().slice(0, 2)}°
            </p>
            <div className="flex flex-col items-center text-white mt-2 gap-[.2rem]">
              <WeatherDetails
                data={(((weatherData.main.feels_like - 32) * 5) / 9)
                  .toString()
                  .slice(0, 2)}
                title="Real Fell"
                unit="°"
              />
              <WeatherDetails
                data={weatherData.main.humidity}
                title="Humidity"
                unit="%"
              />
              <WeatherDetails
                data={weatherData.wind.speed}
                title="Wind"
                unit=" km/h"
              />
            </div>
            <div className="text-white flex gap-3 mt-3">
              <WeatherDetails
                title="Rise"
                data={formatToLocalTime(
                  weatherData.sys.sunrise,
                  weatherData.timezone,
                  "hh:mm a"
                )}
              />
              <WeatherDetails
                title="Set"
                data={formatToLocalTime(
                  weatherData.sys.sunset,
                  weatherData.timezone,
                  "hh:mm a"
                )}
              />
              <WeatherDetails
                title="High"
                data={(((weatherData.main.temp_max - 32) * 5) / 9)
                  .toString()
                  .slice(0, 2)}
                unit="°"
              />
              <WeatherDetails
                title="Low"
                data={(((weatherData.main.temp_min - 32) * 5) / 9)
                  .toString()
                  .slice(0, 2)}
                unit="°"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
