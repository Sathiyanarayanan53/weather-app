import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Hero = () => {
  const[city, setCity] = useState('');
  const [weather,setWeather] = useState('');
  const[temp,setTemp] = useState('');
  const[desc, setDesc] = useState('');
  const[show, setShow] = useState(false);
  const handleCityChange = (e) => {
    setCity(e.target.value);
  }
  const getWeather = () => {
    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2abb5bca237f7fb85e78743092d8d8ed`)
      weatherdata.then(response => {
        console.log(response.data);
        setWeather(response.data.weather[0].main)
        const celsiusTemp = (response.data.main.temp - 273.15).toFixed(1); // Round to 1 decimal place
        setTemp(celsiusTemp);
        setDesc(response.data.weather[0].description);
        setShow(true);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  return (
    <>
    <div className='flex flex-col mx-auto w-fit my-20 border rounded-lg p-4'>
      <h1 className='text-2xl font-bold'>Weather Forecast</h1>
      <p className='mt-2'>Get the latest weather updates for your location.</p>
      <input className='border p-2 rounded mt-4' type="text" placeholder="Enter your location" onChange={handleCityChange} />
      <button className='mt-4 bg-teal-500 text-white px-4 py-2 rounded' onClick={getWeather}>Get Weather</button>
      {show && (
        <div className='mt-4 mx-4'>
          <p>Weather : {weather}</p>
          <p>Temperature : {temp}°C</p>
          <p>Description : {desc}</p>
        </div>
      )}
    </div>
    <footer className='bg-teal-300 w-full p-4 absolute bottom-0 text-white font-bold text-center'>
      <p>&copy; 2025 WeatherApp. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Hero