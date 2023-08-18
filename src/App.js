import LocationForm from './components/LocationForm';
import WeatherData from './components/WeatherData';
import './App.css';
import api from './api/weatherAPI';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HourlyData from './components/HourlyData';




function App() {

  const[forecast, setForecast] = useState(null);
  const[searchCounter, setSearchCounter] = useState(0);
  

  useEffect(() => {
    getWeatherDataFromGeolocation()
  }, [])


  useEffect(() => {
    
  }, [forecast])

  useEffect(() => {

  }, [searchCounter]);



 const handlerSubmitLocation = async (formData) => {
      const { city, state } = formData;

      try {
        const res = await api (`/forecast?q=${city},${state}&cnt=8&appid=${process.env.REACT_APP_API_KEY}&units=imperial`);
        setForecast(res.data);
        setSearchCounter(searchCounter + 1);
      
      } catch (error) {
        

      }
  }

  const getWeatherDataFromGeolocation = () => {
    console.log("Geolocation", navigator.geolocation);

    navigator.geolocation.getCurrentPosition(async (location) => {
      const { latitude, longitude } = location.coords;

      try {
        const res = await api(`/forecast?lat=${latitude}&lon=${longitude}&cnt=3appid=${process.env.REACT_APP_API_KEY}`)
        console.log(res)

      } catch (error) {

      }
    },
    (error) => {
      console.log(error);
      
    }
    )

  }

  return (
    <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LocationForm handlerSubmitLocation={handlerSubmitLocation}/>} >
              
              {forecast &&
                <Route path='/weather' element={<WeatherData forecast={forecast}/>}>
                <Route path='/weather/:id' element={<HourlyData data={forecast}/>}>

                </Route>
              </Route>
              }          
            </Route>
          </Routes>
        </BrowserRouter>

        
        

    </div>
  );
}

export default App;
