import React, { useState } from 'react';

function WeatherDetails({ weatherData }) {
  const [selectedHour, setSelectedHour] = useState(0);

  if (!weatherData) return <div>Loading...</div>;

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const selectedWeather = weatherData[selectedHour];

  return (
    <div>
      <h2><b>Detalji O Vremenu</b></h2>
      <select onChange={handleHourChange} value={selectedHour}>
        {weatherData.map((weather, index) => (
          <option key={index} value={index}>
            {weather.time}
          </option>
        ))}
      </select>
      <div>
        <p>Temperatura: {selectedWeather.temp}°C</p>
        <p>Stanje: {selectedWeather.condition}</p>
        <p>Vreme: {selectedWeather.time}</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
