import React from 'react'
import logo from './logo.svg';
import './App.css';

const h = React.createElement

function Kravina() {
  return (
    <marquee>Isli na prazdniny</marquee>
  )
}

function Obal(props) {
  return (
    <span style={{border: `3px dashed ${props.farba}`}}>
      Toto su deti: {props.children}
      <br/>
      Toto su smeti: {props.children}
    </span>
  )
}

function Blabla() {
  return (
    h('div', {style: {border: '2px dashed orange'}},
      h('h1', {}, 'BlaBla'),
      h(Kravina), 
      h(Obal, {farba: 'red'}, 'Deti')
    )
  )
}

function App() {
  return (
    <div className="App">
     
      <div style={{border: '2px dashed orange'}}>
        <h1 className={'modernita'}>BlaBla</h1>
        <Kravina/>
        <Obal farba='red'>Dei</Obal>
      </div>
      <hr/> 
      <Blabla/>

    </div>
  );
}

export default App;
