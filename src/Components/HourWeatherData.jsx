import React from 'react'
import {useState, useEffect} from 'react';
import { fetchWeatherData } from '../Services/WeatherApi';
import { useParams } from 'react-router-dom';

const HourWeatherData = () => {
    const { city } = useParams(); 
    const [hour, setHour] = useState(null);
   
    useEffect(()=>{
        if(city) {
            fetchWeatherData(city).then(data => setHour(data));
        }
    }, [city]);

  return (
    <div className='hourDataCon'>
        { hour?.forecast?.forecastday?.[0]?.hour ? (
            <div className='hourData'>
                {hour.forecast.forecastday[0].hour.map((hour, index) =>(
                    <div key={index}>
                     <p>{hour.temp_c}&deg;c</p>
                     <p>{hour.vis_km}kph</p>
                    </div>
                ))}
            </div>
            ) : (<p>Loading...</p>)
            }
    </div>
  )
};

export default HourWeatherData;
