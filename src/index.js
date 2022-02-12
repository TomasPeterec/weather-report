import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BigSelector} from './BigSelector'
import Autocomplete from './Autocomplete'




ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
   
    {/* <BigSelector/> */}
    <Autocomplete/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
