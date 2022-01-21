import React from 'react';


class Toggle extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      isVisible: true,
    }
  }

  render () {
    return (
      <div style={{border: '2px solid green'}}>
        <button 
          onClick={() => 
            this.setState({isVisible: !this.state.isVisible})
          }
        >
          Toggle
        </button>
        {this.state.isVisible && this.props.children}
      </div>
    )
  }
}

export default Toggle