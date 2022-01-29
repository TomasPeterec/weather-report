import React from "react"
import HourlyForecast from "./HourlyForecast"
import axios from "axios"



/** 
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
**/

  export class AppUnderMenu extends React.Component {
    constructor(...args) {
      super(...args)
      this.state = {
      }
    }

/**
  fetchData({lat, lon}) {
    openWeatherMap(lat, lon)
      .then((result) => this.setState({data: result}))
      .catch((error) => this.setState({error: error}))
  }

  componentDidMount() {
    this.fetchData(this.props.listOfCitys[this.state.locationLabel])
  }
**/
 

  render() {
    if (this.props.dataToAppearing) {
      return (
        
        <div>
          <HourlyForecast 
            location={this.props.selectedCity}
            hours={this.props.dataToAppearing}
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
