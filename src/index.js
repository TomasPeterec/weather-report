import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Navigation} from './Navigation'
import {App} from './App'




ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <div>
      <Navigation tabs={{
        Cuba: <div>pocasie Pre kubu</div>, 
        Hispagnola: <App></App>,
        Santo: <h1>Mulat je kulat</h1>
      }}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
