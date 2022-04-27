import "./style.css";

function DisplayWeather({city, weather}) {

  return (

    <div className="display-container">
      <div className="display-city">{city}</div>
      <div className="display-temperature">{weather.temperature}</div>
    </div>

  )

}

export default DisplayWeather;
