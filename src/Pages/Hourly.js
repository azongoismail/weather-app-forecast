import {useState, useEffect} from 'react';
import { fetchWeatherData } from '../Services/WeatherApi';
import { useParams } from 'react-router-dom';
import { format} from 'date-fns';

const Hourly = () => {
const { city } = useParams(); 
    const [hour, setHour] = useState(null);
    
   
    useEffect(()=>{
        if(city) {
            fetchWeatherData(city).then(data => setHour(data));
        }
    }, [city]);

    
    const formatTime = (dateString) => {
      return format(dateString, 'h a')
    }
   

  return (
    <>
    <div className="hourpage">
      <div className='hourDataCon'>
        { hour?.forecast?.forecastday?.[0]?.hour ?(
            <div className='hourData'>
                {hour.forecast.forecastday[0].hour.map((hour, index) =>(
                    <div key={index} className='klass'>
                      <p>{formatTime(hour.time)}</p>
                     <p>{hour.temp_c} &deg;C</p>
                     <p>{hour.vis_km} kph</p>
                     <p>{hour.feelslike_c} &deg;C</p>
                    </div>
                ))
                }
            </div>
            ) : (<p>Loading...</p>)
            }
      </div>
    </div>
   
    </>
  )

}

export default Hourly;





