import { Outlet, useParams } from "react-router-dom";
import './HourlyData.css'


function HourlyData({data}) {
    console.log(data)
    const {id} = useParams()
    const weather = data.list.find((item)=>item.dt==id)
    console.log(weather)

    return(
        <>
            <section className="hourInfo">
                <div>
                    <p>Weather feels like: {weather.main.feels_like} degrees</p> 
                    <p>Temp: {weather.main.temp}</p> 
                    <p>Weather: {weather.weather[0].main}</p> 
                    <p>Description: {weather.weather[0].description}</p> 
                    <p>Wind Speed: {weather.wind.speed} mph</p> 
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /> 
                </div>
            </section>
            <Outlet />
        </>
    )
}

export default HourlyData;