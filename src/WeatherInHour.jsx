import React from "react"

const data =  {
  "dt": 1596632400,
  "main": {
    "temp": 289.16,
    "feels_like": 288.41,
    "temp_min": 289.16,
    "temp_max": 289.16,
    "pressure": 1013,
    "sea_level": 1013,
    "grnd_level": 1010,
    "humidity": 78,
    "temp_kf": 0
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04n"
    }
  ],
  "clouds": {
    "all": 100
  },
  "wind": {
    "speed": 2.03,
    "deg": 252,
    "gust":5.46
  },
  "visibility": 10000,
  "pop": 0.04,
  "sys": {
    "pod": "n"
  },
  "dt_txt": "2020-08-05 13:00:00"
}

const WeatherInHour = (props) => {
  const date = new Date(props.timestamp)
  return (
    <div>
      time: {date.getHours()} : {date.getMinutes()}
      <br/>
      date: {date.toISOString()}
      <br/>
      timestamp: {props.timestamp}
      <br/>
      temperature: {props.temperature}
      <br/>
      weather description: {props.weatherDescription}
      <br/>
      <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}/>
      <br/>
    </div>
  )
}


export default WeatherInHour
