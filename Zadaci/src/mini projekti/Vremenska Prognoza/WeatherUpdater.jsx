import React, { useReducer, useEffect } from 'react';

const initialState = [];

function weatherReducer(state, action) {
  switch (action.type) {
    case 'update':
      return action.payload;
    default:
      return state;
  }
}

function WeatherUpdater({ setWeatherData }) {
  const [weatherData, dispatch] = useReducer(weatherReducer, initialState);

  useEffect(() => {
    const fetchWeatherData = async () => {
      // Simulacija API poziva za prognozu
      const data = [
        { time: '08:00', temp: 20, condition: 'Suncano' },
        { time: '09:00', temp: 22, condition: 'Delimicno Oblacno' },
        { time: '10:00', temp: 24, condition: 'Oblacno' },
        // ... dodajte više podataka po satu
      ];
      dispatch({ type: 'update', payload: data });
      setWeatherData(data);
    };

    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 3600000); // Ažuriranje na svakih sat vremena

    return () => clearInterval(interval);
  }, [setWeatherData]);

  return null;
}

export default WeatherUpdater;
