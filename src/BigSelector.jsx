import React from "react";
import LocationSelector from "./LocationSelector";
import {Navigation} from './Navigation'
import {AppUnderMenu} from './AppUnderMenu'
import axios from "axios"

const LOCATIONS = {
  'Bratislava': {lat: 48.14, lon: 17.10},
  'London': {lat: 51.30, lon: 0.70},
  'New York': {lat: 40.42, lon: 74.00},
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

export class BigSelector extends React.Component {
  constructor(...args) {
    super(...args)
      this.state = {
        locationLabel: 'Bratislava',
        child01: React.createRef(),
    }
  }

  fetchData({lat, lon}) {
    openWeatherMap(lat, lon)
      .then((result) => this.setState({data: result}))
      .catch((error) => this.setState({error: error}))
  }

  componentDidMount() {
    this.fetchData(LOCATIONS[this.state.locationLabel])
  }

  render() {
    return (
      <>
        <LocationSelector 
            labels={Object.keys(LOCATIONS)}
            onChange={(selectedLabel) => {
              this.setState({
                locationLabel: selectedLabel,
              })
              this.fetchData(LOCATIONS[selectedLabel])
            }}
          />
        <Navigation tabs={{
          Cuba: <div>pocasie Pre kubu</div>, 
          Hispagnola: 
            <AppUnderMenu 
              ref={this.state.child01} 
              selectedCity={this.state.locationLabel} 
              listOfCitys={LOCATIONS} 
              dataToAppearing={this.state.data}
            ></AppUnderMenu>,
          Santo: <h1>Mulat je kulat</h1>
        }}/>  
      </>
    )
  }
}