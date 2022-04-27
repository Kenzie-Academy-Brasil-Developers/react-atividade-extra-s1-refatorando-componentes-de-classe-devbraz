import { useState } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";

function App() {

  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('')

  return (

    <div className="App">
      <SearchWeather setWeather={setWeather} setCity={setCity}/>
      <DisplayWeather weather={weather} city={city}/>
    </div>

  )

}

export default App;
