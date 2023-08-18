import LocationForm from './components/LocationForm';
import WeatherData from './components/WeatherData';
import './App.css';
import './components/LocationForm.css';
import api from './api/weatherAPI';
import { useEffect, useState } from 'react'
import Graph from './components/Graph';

function App() {

// -=-=-=-= USE EFFECTs  -==-=-=-=-=-=-=-=-
  const[forecast, setForecast] = useState(null);
  const[searchCounter, setSearchCounter] = useState(0);

  useEffect(() => {
    getWeatherDataFromGeolocation()
  }, [])


  useEffect(() => {
    
  }, [forecast])

  useEffect(() => {

  }, [searchCounter]);


// =-=-=-==-==- SUBMIT HANDLER _-==-=-=-=-=-=-=-=-=-
 const handlerSubmitLocation = async (formData) => {
      const { city, state } = formData;

      try {
        const res = await api (`/forecast?q=${city},${state}&units=imperial&&appid=${process.env.REACT_APP_API_KEY}`);
        setForecast(res.data);
        setSearchCounter(searchCounter + 1);
      } catch (error) {
        console.log("Something went wrong")

      }
  }

  const getWeatherDataFromGeolocation = () => {
    

    navigator.geolocation.getCurrentPosition(async (location) => {
      
      const { latitude, longitude } = location.coords;

      try {
        const res = await api(`/forecast?lat=${latitude}&lon=${longitude}&cnt=3appid=${process.env.REACT_APP_API_KEY}`)
        
      } catch (error) {
        
      }
    },// WHAT TO PUT HERE 
    (error) => {
      
    }
    )

  }


// _+_+_+_+_+_+_+_+_+_+_  RETURN _+_+_+_+_+_+_+_+_+_+
  return (
    <div className="App">
        <LocationForm handlerSubmitLocation={handlerSubmitLocation}/>

        { forecast && <WeatherData forecast={forecast}/>}

        { forecast && <Graph data={forecast} />}

        

    </div>
  );
}

export default App;
