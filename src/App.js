import LocationForm from './components/LocationForm';
import WeatherData from './components/WeatherData';
import './App.css';
import api from './api/weatherAPI';
import { useEffect, useState } from 'react'

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
        const res = await api (`/forecast?q=${city},${state}&cnt=8&appid=${process.env.REACT_APP_API_KEY}`);
        console.log(res);
        setForecast(res.data);
        setSearchCounter(searchCounter + 1);
      } catch (error) {
        console.log("Something went wrong")

      }
  }

  const getWeatherDataFromGeolocation = () => {
    console.log("Geolocation", navigator.geolocation);

    navigator.geolocation.getCurrentPosition(async (location) => {
      console.log(location);
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
        <LocationForm handlerSubmitLocation={handlerSubmitLocation}/>

        { forecast && <WeatherData forecast={forecast}/>}
        

    </div>
  );
}

export default App;
