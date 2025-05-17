import React from 'react'
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Components/Form';
import Current from '../Components/Current';
import Info from '../Components/Info'



const HomeFinal = ({city, setCity}) => {
  const navigate = useNavigate();

  const handleSubmit = (searchCity) => {
    setCity(searchCity);
    navigate('/')


  }
  return (
    < div className='bigWrapper'>
      <Form 
       onSearch={handleSubmit}
       defaultCity={city}
       />
    <div className='wrapper'> 
    <Current city={city} />
    < Info city={city} />
    </div>
    </div>
    
  )
}

export default HomeFinal
 