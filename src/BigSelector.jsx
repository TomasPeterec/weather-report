import React from "react";
import LocationSelector from "./LocationSelector";
import {Navigation} from './Navigation'
import {AppUnderMenu} from './AppUnderMenu'
import axios from "axios"
import Chart from "./Chart";

const LOCATIONS = {
  'Bratislava': {lat: 48.14, lon: 17.10},
  'London': {lat: 51.30, lon: 0.70},
  'New York': {lat: 40.42, lon: 74.00},
}

const OPEN_WEATHER_APP_ID = '7dab2adde313375d154eeebd3426fed6'
/*
clouds: 20
dew_point: 273.43
dt: 1644012000
feels_like: 273.36
humidity: 85
pop: 0
pressure: 1014
temp: 275.69
uvi: 0
visibility: 10000
weather: [{…}]
wind_deg: 215
wind_gust: 4.21
wind_speed: 2.27
*/

const openWeatherMap = (lat, lon) =>
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_APP_ID}&lon=${lon}&lat=${lat}`)  
    .then(
      (response) =>
        response.data.hourly.map((item) => ({
          timestamp: item.dt * 1000,
          temperature: item.temp,
          weatherDescription: item.weather[0].description,
          icon: item.weather[0].icon,
          humidity: item.humidity,
          feelsLike: item.feels_like,
        })
      )
    )
    .catch((e) => Promise.reject(e.message))

export class BigSelector extends React.Component {
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
        <Navigation initialTab="Chart" tabs={{
          Chart: this.state.data && <Chart hours={this.state.data}/>, 
          List: 
            <AppUnderMenu
              selectedCity={this.state.locationLabel} 
              listOfCitys={LOCATIONS} 
              dataToAppearing={this.state.data}
            ></AppUnderMenu>,
        }}/>  
      </>
    )
  }
}