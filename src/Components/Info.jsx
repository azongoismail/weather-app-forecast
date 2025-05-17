import React, { useEffect, useState } from 'react'
import { fetchWeatherData } from '../Services/WeatherApi';

const Info = ({city}) => {
    const [info, setInfo] = useState('Accra');
    useEffect(()=>{
fetchWeatherData(city).then(data => setInfo(data));
    }, [city])
  return (
    <div className='info'>
        { info && info.location ?(<>
        <table>
            <caption>
                Information
            </caption>
        <thead>
            <tr>
                <th>Country:</th>
                <th>Region:</th>
                <th>Lat</th>
                <th>Lon</th>
            </tr>
            
        </thead>
        <tbody>
            <tr>
                <td> {info.location.country}</td>
                <td> {info.location.region}</td>
                <td> {info.location.lat}</td>
                <td> {info.location.lon}</td>
            </tr>
            
        </tbody>
    </table>

        </> ) : (<p>Loading</p>)

        }
    
    </div>
  )
}

export default Info
