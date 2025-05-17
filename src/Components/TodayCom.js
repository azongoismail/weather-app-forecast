import React from 'react'

import { FaEye } from "react-icons/fa6";
import { WiHumidity, WiThermometer } from "react-icons/wi";
const TodayCom = ({data}) => {
  return (
    <>
     <div className="todayFlex">
    {data && data.current && data.forecast && data.location &&(<>
        <div className="dailySection">
            <div className="todayContainer">
            <h2>weather Today in  {data.location.name}, {data.location.country}</h2>
                <div>
                    <p>Feels Like</p>
                    <h3>{data.forecast.forecastday[0].hour[0].feelslike_c}&deg;C</h3>
                </div>
                <div>
                    <p><WiThermometer size='25px' color='Red'/>High/Low</p>
                    {/* <p>{data.forecast.forecastday.updateDate().maxtemp/data.forecast.forecastday.updateDate().mintemp}</p> */}
               
                </div>
                <div>
                    <p> <WiHumidity  size='25px'/> humidity</p>
                    <p>{data.current.humidity}%</p>
                </div>
                <div>
                    <p>< FaEye  size='20px' />Visibility</p>
                    <p>{data.current.visibility}10km</p>
                </div>
            </div>
        </div>
        </>)
    }
    </div>
    
    </>
  )
}

export default TodayCom
