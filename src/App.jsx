import React from "react"
import HourlyForecast from "./HourlyForecast"
import axios from "axios"

import LocationSelector from './LocationSelector'

const LOCATIONS = {
  'Bratislava': {lat: 48.14, lon: 17.10},
  'Kysucké nové mesto': {lat: 49.29, lon: 18.80},
  'Spišská Belá': {lat: 49.18, lon: 20.45},
}

const OPEN_WEATHER_APP_ID = '7dab2adde313375d154eeebd3426fed6'

const openWeatherMap = (lat, lon) =>
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_APP_ID}&lon=${lon}&lat=${lat}`)  
    .then(
      (response) =>
        response.data.hourly.map((item) =>
        ({
          timestamp: item.dt * 1000,
          temperature: item.temp,
          weatherDescription: item.weather[0].description,
          icon: item.weather[0].icon,
        })
      )
    )
    .catch((e) => Promise.reject(e.message))

  export class App extends React.Component {
    constructor(...args) {
      super(...args)
      this.state = {
        locationLabel: 'Bratislava',
      }
    }

  fetchData({lat, lon}) {
    openWeatherMap(lat, lon)
      .then((result) => this.setState({data: result}))
      .catch((error) => this.setState({error: error}))
  }

  componentDidMount() {
    this.fetchData(LOCATIONS.Bratislava)
  }

  render() {
    if (this.state.data) {
      return (
        <div>
          <LocationSelector 
            labels={Object.keys(LOCATIONS)}
            onChange={(selectedLabel) => {
              this.setState({
                locationLabel: selectedLabel,
              })
              this.fetchData(LOCATIONS[selectedLabel])
            }}
          />

          <HourlyForecast 
            location={this.state.locationLabel}
            hours={this.state.data}
          />
        </div>
      )
      
    } else if (this.state.error) {
      return (
        <div style={{background: 'red'}}>
          Error: {this.state.error}
        </div>
      )
    } else {
      return (
        <div>loading</div>
      )
    }
    
  }
}
