import React from "react"
import { LineOfTabs } from "./LineOfTabs"

const NAMESOFTABS = [
  ["North Aerica", "path01"],
  ["Latin Aerica", "path02"],
  ["Europe", "path03"],
  ["Asia", "path04"],
  ["Australia", "path05"],
  ["Africa", "path06"],
  ["Antarctida", "path07"],
];

export const TabNavigationByTomas = () => 
  <div style={{height: '119px', backgroundColor: '#0045AC'}}>
    <div style={{height: '90px'}}>
      <div style={{display: 'inline-flex'}}>
        <div style={{width: '19px', height: '10px'}}></div>
        <div style={{fontFamily: 'sans-serif', fontSize: '54px', color: '#ffffff'}}>
          Weather report
        </div>  
      </div>
    </div>
    <div style={{display: 'inline-flex'}}>
      <div style={{width: '19px'}}></div>
      <LineOfTabs tabsNames={NAMESOFTABS}/>
    </div>
  </div>