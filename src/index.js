import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BigSelector} from './BigSelector'
import Autocomplete from './Autocomplete'


const fakeSearch = (q) => 
  new Promise(
    (resolve, reject) =>
      q === 'klakni' 
        ? setTimeout(reject, 1000, 'To cumis co?')
        : setTimeout(resolve, 1000, [`Foo ${q}`, `Gzz ${q}`, `Mim ${q}`, `Gloo ${q}`])
  )


ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
   
    {/* <BigSelector/> */}
    <Autocomplete 
      getOptions={fakeSearch}
     // getOptions={q => Promise.reject('klaklo ti to')}
      onChange={(selectedValue) => console.log('autocomplete selected:', selectedValue)}
    />
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
