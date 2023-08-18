import './WeatherData.css';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function WeatherData({ forecast }) {
   
    const navigate = useNavigate()

 
    const { city, list } = forecast;
    const showHour = (dt) => {
        navigate(`/weather/${dt}`)
       
    }


    return (
        <>
           <section className='main'>
                <h2 className='header'>Weather Data components</h2>
                <p className='cityName'>City Name: {city.name}</p>
                {list.map((weather, index) => (
                <div key={index}>
                    <button className='hourButton' onClick={() => showHour(weather.dt)}>Hour:{(index + 1) * 3}</button>
                </div>
    
                ))}
            
           
                <Outlet/>
            </section> 
        </>
    )
}

export default WeatherData;




