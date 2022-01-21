import React from "react"
import WeatherInHour from "./WeatherInHour"

export default (props) =>
  <div>
    <h1>Hourly forecast for {props.location}</h1>
    <ol>
      {props.hours.map((hour) =>
        <li key={hour.timestamp}>
          <WeatherInHour 
            timestamp={hour.timestamp} 
            temperature={hour.temperature} 
            weatherDescription={hour.weatherDescription}
            icon={hour.icon}
          />
        </li>
      )}
      
    </ol>
  </div>