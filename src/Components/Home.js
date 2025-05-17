
// import Today from '../Pages/Today';
import { WiHumidity, WiThermometer } from "react-icons/wi";

import { FaEye } from "react-icons/fa6";

const Home = ({data,getWeatherIcons,convertToWhole}) => {
    return ( 
    <>
    <div className="weatherAppContainer" >
            <div className="mainContainer" >
            {data && data.location &&(<>
            <div className="weatherConditions">
            <h1 className='city' >
                {data.location.name}, {data.location.country}
            </h1>
            <h1 className='temperature'> 
            { getWeatherIcons(data.current.condition.text)}
                {convertToWhole(data.current.temp_c)}&deg;C
            </h1>
            <p className='weatherDescription'>Feels like {convertToWhole(data.current.feelslike_c)}&deg;C. {data.current.condition.text}</p>
            </div>
               <div className="weatherDetails">
                <div>
                <p>Wind direction:</p>
                <p>{data.current.wind_dir}</p>
                </div>
                <div>
                <p>Wind speed:</p>
                <p>{data.current.wind_kph}Km/h</p>
                </div>
                <div>
                <p>humidity:</p> 
                <p>< WiHumidity size={25}/>{data.current.humidity}%</p>
                </div>
                <div>
                <p>Visibility:</p> 
                <p>{data.current.vis_km}Km</p>
                </div>
                <div>
                <p>precipitation:</p>
                <p> {data.current.precip_in}</p>
                </div>
               </div>
                </>)}
            </div> 
        </div>
        
    
    </> 
    );
}
 
export default Home;