import React from 'react'
import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../Services/WeatherApi';

const Current = ({city}) => {
const [ weather, setWeather] = useState(null);
     useEffect(()=>{
            fetchWeatherData(city).then(data => setWeather(data));
    
        }, [city]);

  return (
    <div className='weather'>
    {weather && weather.location && weather.forecast.forecastday[0]?(
        <div className='current'>
        <h2>{weather.location.name}, {weather.location.country}</h2>
        <p>Temperature: {weather.current.temp_c} &deg;C</p>
        <p>Humidity:  {weather.current.humidity}%</p>
        <p>wind:      {weather.current.wind_dir}</p>
        <p>Sunrise:   {weather.forecast.forecastday[0].astro.sunrise}</p>
        <p>Sunset:    {weather.forecast.forecastday[0].astro.sunset} </p>
        <p>precip:    {weather.current.precip_mm}</p>
        <p>pressure:  {weather.current.pressure_mb}</p>
        <p>Feelslike: {weather.current.feelslike_c} &deg;C</p>
        </div>

    ): <p>Loading...</p>
    }
    
    </div>
  )
}

export default Current;
