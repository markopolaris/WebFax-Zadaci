import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import WeatherDetails from './WeatherDetails';
import WeatherUpdater from './WeatherUpdater';

function WeatherApp() {
const [weatherData, setWeatherData] = useState(null);

return (
<div className='text-center mt-10'>
    <p className='text-lg'>Opis: Napravite aplikaciju koja prikazuje trenutnu vremensku prognozu i ažurira podatke svakih sat vremena. Korisnik može pregledati detalje prognoze za različite sate u toku dana. 
        <br />
        <b>Aplikacija koristi tri komponente: WeatherDisplay, WeatherDetails, i WeatherUpdater.</b>
    </p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <h1 className='text-2xl font-medium'>Pracenje Vremenske Prognoze</h1>
        <WeatherUpdater setWeatherData={setWeatherData} />
        <WeatherDisplay weatherData={weatherData} />
        <WeatherDetails weatherData={weatherData} />
    </div>
</div>
);
}

export default WeatherApp;