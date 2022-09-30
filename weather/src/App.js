import {
  Navbar,
  Input,
  WeatherData,
  WeatherDataHourly,
  Footer,
} from "./components/index";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [location, setLocation] = useState("Ankara");
  const [latLon, setLatLon] = useState({ lat: 39.9199, lon: 32.8543 });
  const [data, setData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);

  const WEATHER_API = process.env.REACT_APP_WEATHER_API;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${WEATHER_API}`;
  const HOURLY_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon.lat}&lon=${latLon.lon}&appid=${WEATHER_API}&cnt=5&units=metric`;

  const getInfoHourly = () => {
    axios
      .get(HOURLY_URL)
      .then((res) => {
        setHourlyData(res.data);
        console.log(res.data);
      })
      .catch((ERR) => console.error(ERR));
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    getInfoHourly();
  }, [latLon, data]);

  const getInfo = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLatLon(res.data.coord);
      })
      .catch((ERR) => console.error(ERR));
  };
  return (
    <div className="bg-blue-600 h-screen">
      <Navbar />
      <Input getLocation={setLocation} getInfos={getInfo} />
      {data && <WeatherData weatherData={data} func={getInfoHourly} />}
      {hourlyData && <WeatherDataHourly hourlyData={hourlyData} />}
      <Footer />
    </div>
  );
}

export default App;
