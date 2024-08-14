import React, { useState, useEffect } from 'react';

function WeatherDisplay({ weatherData }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (weatherData) {
      setCurrentWeather(weatherData[0]); // Prikazuje prognozu za prvi sat
    }
  }, [weatherData]);

  if (!currentWeather) return <div>Loading...</div>;

  return (
    <div>
      <h2><b>Trenutna Vremnska Prognoza</b></h2>
      <p>Temperatura: {currentWeather.temp}°C</p>
      <p>Stanje: {currentWeather.condition}</p>
      <p>Poslednja Promena: {currentWeather.time}</p>
    </div>
  );
}

export default WeatherDisplay;
