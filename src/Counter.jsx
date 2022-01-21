import React from 'react'

const navysenie = (a) => a + 100

export default class Counter extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      count: 0,
    }
  }

  render () {
    console.log("Counter vyrenderovany")
    return (
      <div style={{border: '2px solid orange'}}>
        <button 
          onClick={() =>
            this.setState({count: 0})
          }
        >
          to zero
        </button>
        <button 
          onClick={() => 
            this.setState({count: navysenie(this.state.count)})
          }
        >
          count plus
        </button>
      {this.state.count}
      </div> 
    )
  }
}
