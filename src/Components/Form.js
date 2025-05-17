import '../App.css';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';


const Form = ({onSearch, defaultCity= 'Accra' }) => {
    const [city, setCity] = useState(defaultCity);
  
const handleSearch = (e) =>{
    e.preventDefault();

     const trimmedCity = city.trim();

    if(trimmedCity) {
        onSearch(trimmedCity);
    } else {
        alert('enter city');
    }
       
    
}
    const handleChange = (e) => {
        setCity(e.target.value)
       
    }
   
    return (  
    <div>
        <form className="inputForm" onSubmit={handleSearch}>
       <Input value={city} onChange={handleChange} />
       <Button/>
       </form>

    </div>);
}
 
export default Form;