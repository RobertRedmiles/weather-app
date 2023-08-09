function WeatherData({ forecast }) {

    const { city, list } = forecast;


    return (
        <>
            <h2>Weather Data components</h2>
            <p>City Name: {city.name}</p>
            {list.map((weather, index) => (
                <div key={index}>
                    <h4>Hour:{(index + 1) * 3}</h4>
                    <p>Weather feels like: {weather.main.feels_like}</p>
                    <p>Pressure: {weather.main.pressure}</p>
                    <p>Weather: {weather.weather[0].main}</p>
                    <p>Description: {weather.weather[0].description}</p>
                </div>
            ))}
        </>
    )
}

export default WeatherData;