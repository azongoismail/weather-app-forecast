import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import { WiDaySunny,WiCloud, WiNightCloudy,WiHumidity, WiNightClear } from 'react-icons/wi';
import Layout from './Components/Layout';
import Hourly from './Pages/Hourly';
import Footer from './Components/Footer';
import './App.css';
import HomeFinal from './Pages/HomeFinal';
import DailyReport from './Components/DailyReport';


function App() {
  const [city, setCity] = useState('Accra');
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
       <Route path ='/'  element={< Layout city={city} setCity={setCity} />} >
       <Route index element={<HomeFinal city={city} setCity={setCity} />} />
       <Route path="/hourly/:city" element={<Hourly />} />
       <Route path="/daily-reports/:city" element={<DailyReport />} />
     </Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;