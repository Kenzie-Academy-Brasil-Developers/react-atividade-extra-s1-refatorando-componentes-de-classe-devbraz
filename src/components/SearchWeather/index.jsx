import { useState } from "react";

import "./style.css";

function SearchWeather({setWeather, setCity}) {

  const [inputValue, setInputValue] = useState('Curitiba')

  const handleSubmit = (inputValue) => {

    fetch(`https://goweather.herokuapp.com/weather/${inputValue}`)
      .then((response) => response.json())
      .then((response) => setWeather(response), setCity(inputValue))

  }

  return (

    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button className="search-button" onClick={() => handleSubmit(inputValue)}>
          Search
        </button>
      </div>
    </div>

  )

}

export default SearchWeather;
