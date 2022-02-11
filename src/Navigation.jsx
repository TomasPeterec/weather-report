import React from "react";


export class Navigation extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      activeTab: this.props.initialTab,
    }
  }

  render() {
    return (
      <>
        <nav style={{backgroundColor: '#0045AC', paddingTop: '20px'}}>
          <ul style={{listStyle: 'none', display: 'flex'}}>
            {Object.keys(this.props.tabs).map((tabLabel) => 
              <li style={{marginRight: '2px', display: 'inline-flex', flexDirection: 'column'}} onClick={() => this.setState({activeTab: tabLabel})} key={tabLabel} className="tab">
                <div style={{display:'flex'}}>
                  <div style={{
                    fontFamily: 'sans-serif', 
                    color: '#0045AC', 
                    fontSize: '18px',
                    height: '23px',
                    display: 'inline-flex',
                    paddingLeft: '7px',
                    paddingTop: '5px',
                    background: 'white',
                    borderTopLeftRadius: '4px'
                    }}
                  >{tabLabel}</div>
                  <svg xmlns="http://www.w3.org/2000/svg" idth="14px" height="28px" viewBox="0 841.89 14 28">
                    <path fill="#FFFFFF" d="M5.671,844.1c-0.514-1.294-1.774-2.21-3.251-2.21h-2.421v28H14L5.671,844.1z"/>
                  </svg>
                </div>
                <div style={{height: '1px', backgroundColor: this.state.activeTab === tabLabel && '#ffffff'}}></div>
              </li>
            )}
          </ul>
        </nav>
        <div>{this.props.tabs[this.state.activeTab]}</div>
      </>
    )
  }
}

  