import React from "react";

const WeatherDetails = ({ data, title, unit }) => {
  return (
    <p className="text-sm">
      {title}:{" "}
      <span className="font-semibold">
        {data}
        {unit}
      </span>
    </p>
  );
};

export default WeatherDetails;
