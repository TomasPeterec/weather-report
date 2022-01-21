import React from 'react';


export class Tab extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      toggled: '',
      contentStorage: this.props.tabName, 
    }
  }

  render () {
    return (
        <div style={{display: 'inline-flex',}}>
          <div style={{display: 'inline-flex', flexDirection: 'column'}}>
            <div onClick={document.getElementById('bottomContent').innerText=this.state.contentStorage} style={{display: 'inline-flex'}}>
              <div style={{
                backgroundColor: '#ffffff',
                width: '7px', 
                heiht: '28px', 
              }}>
              </div>
              <div style={{
                fontFamily: 'sans-serif', 
                color: '#0045AC', 
                fontSize: '18px', 
                backgroundColor: '#ffffff',
                display: 'inline-flex', 
                height: '28px',
              }}>
                <span style={{
                  marginTop: '3px',
                  }}>
                    {this.props.tabName}
                </span>
              </div>
              <div style={{
                width: '14px', 
                heiht: '28px', 
                backgroundColor: '#ffffff'}}>
              </div>
            </div>
            <div style={{height: '1px', backgroundColor: '#0045AC'}}></div>
          </div>
          <div style={{height: '29', width: '2px'}}>
          </div>
        </div>
    )
  }
}
