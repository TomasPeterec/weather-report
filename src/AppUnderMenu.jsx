import React from "react"
import HourlyForecast from "./HourlyForecast"



  export class AppUnderMenu extends React.Component {
    constructor(...args) {
      super(...args)
      this.state = {
      }
    }
 
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
