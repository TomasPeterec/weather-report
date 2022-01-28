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

// Tu je to nahardkodene, ale kludne by sa to dalo generovat.
const FAKE_DATA = [
  {
    timestamp: Date.now() + 0 * 60 * 60 * 1000,
    temperature: 282.58,
    weatherDescription: 'zamracene',
    icon: '10d',
  },
  {
    timestamp: Date.now() + 1 * 60 * 60 * 1000,
    temperature: 283.45,
    weatherDescription: 'zamracene',
    icon: '10d',
  },
  {
    timestamp: Date.now() + 2 * 60 * 60 * 1000,
    temperature: 281.77,
    weatherDescription: 'zamracene',
    icon: '10d',
  },
]

// Toto nacita data okamzite, lebo to vrati resolvnuty promis
const immediateFakeAPI = (lat, lon) =>
  Promise.resolve(FAKE_DATA)

// Toto nacita data o pol sekundy
const delayedFakeAPI = (lat, lon) =>
  // Prvy parameter funkcie setTimeout je callback (funkcia resolve),
  // druhy je cas v milisekundach kolko ma cakat kym zavola ten callback
  // a zvysne argumenty budu pouzite ako argumenty ked setTimeout zavola ten callback,
  // cize co sa udeje, je ze setTimeout pocka 500ms a zavola resolve(FAKE_DATA),
  // a tym sa resolvne ten promis, ktory sme vratili.
  new Promise(resolve => setTimeout(resolve, 500, FAKE_DATA))

export class App extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      locationLabel: 'Bratislava',
    }
  }

  fetchData({lat, lon}) {
    // Tu len vymen openWeatherMap za immediateFakeAPI alebo delayedFakeAPI a malo by to fungovat s FAKE_DATA
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
