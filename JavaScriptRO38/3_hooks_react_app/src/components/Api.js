import { useState, useEffect } from "react";

const WithEffect = () => {
  const [location, setLocation] = useState("Romania");
  const [data, setData] = useState({
    lat: 0,
    lon: 0,
    temperature: 0,
    wind: 0,
    humidty: 0,
  });

  const getWeatherDataFromAPI = async (location) => {
    // we call the rapidapi weater endpoint with specific credentials
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "629983b172msh2195c03d7d9c635p16edd1jsna1927b61bbf0",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    );

    // We convert the response to common JSON format
    const data = await response.json();

    // We set the data state in a preffered format
    if (data?.location && data?.current) {
      setData({
        lat: data.location.lat,
        lon: data.location.lon,
        temperature: data.current.temp_c,
        wind: data.current.wind_kph,
        humidty: data.current.humidity,
      });
    }
  };

  useEffect(() => {
    console.log("Our useEffect run once without any dependency");
  }, []);

  useEffect(() => {
    // Call the weather API to get specific params about weather condition
    // Every time the location state is changing the callback (fn) will run
    getWeatherDataFromAPI(location);
  }, [location]);

  useEffect(() => {
    // Every time the data state is changing the useEffect callback (fn) will run
    console.log("data", data);
  }, [data]);

  return (
    <div>
      <input
        type="text"
        placeholder="Put location"
        name={"location"}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      {/* The JSX below will be update according to the data state */}
      <div>
        <h2>temperature: {data.temperature}C</h2>
        <p>
          lat: {data.lat}, long: {data.lon}
        </p>
        <p>humidity: {data.humidty}</p>
        <p>wind: {data.wind} kph</p>
      </div>
    </div>
  );
};

export default WithEffect;
