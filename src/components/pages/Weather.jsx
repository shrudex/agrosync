import React, { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState([]);
  const apiKey = "3ae8af74b95539197a6bb13266e206a3";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((dataAPI) => setData([dataAPI])) // Wrap the dataAPI object in an array
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {data.map((list, index) => (
          <li key={index}>
            {list.id} - {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
