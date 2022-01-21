import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Tab} from './Tab';


export class LineOfTabs extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      toggled: '',
    }
  }

  render () {
    return (
      <div>
        <div>
          {this.props.tabsNames.map((curebtTabName) =>
            <Tab tabName={curebtTabName[0]}/>
          )}
        </div>
        <br/>
        
      
      </div>
    )
  }
}
