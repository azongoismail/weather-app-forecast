

export async function fetchWeatherData(city) {
    if(!city) return null;
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=95f0ddb3a06a4a358cf223933242311&q=${city}&days=10&aqi=yes&alerts=no`);
    const data = await response.json();
    console.log(data)
    return data;
   
}

fetchWeatherData('Accra');
