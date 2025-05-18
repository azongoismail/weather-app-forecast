import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../Services/WeatherApi';
import { useParams } from 'react-router-dom';

const DailyReport = () => {
    const { city } = useParams(); 
    const [ daily, setDaily] = useState(null);
    
    useEffect(()=>{
        console.log(city);
        fetchWeatherData(city).then(data => setDaily(data))
       
    },[city])

    const dateTime = (enp) =>{
        
            const date = new Date (enp * 1000);
            const utcDate = date.toISOString()
            const options = { weekday:  'long', day:'numeric'}
            const formattedDate = date.toLocaleDateString('en-US', options)
            console.log(utcDate);
            return formattedDate;
            
    }
    return ( 
        <>
        <div className="dailyPage" >
            {daily && daily.forecast.forecastday.map((day, index) =>(
                <div key={index} className='todayData'>
                    < h1>{dateTime(day.date_epoch)}</h1>
                    <p> Sunrise: {day.astro.sunrise}</p>
                    <p> Sunset: {day.astro.sunset}</p>
                    <p> Max Temp: {day.day.maxtemp_c} &deg;C</p>
                    <p> Min Temp: {day.day.mintemp_c} &deg;C</p>

                </div>                                                                                                                                                                                     

            ))

        }
        </div>
       
       
        </>
     );
    }

 
export default DailyReport;