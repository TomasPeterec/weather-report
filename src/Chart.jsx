import React from "react";
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from "recharts"

// iteruje 6 x 
const computeDomain = (hours) => {
  const temperatures = [
    ...hours.map((x) => x.temperature), 
    ...hours.map((x) => x.feelsLike),
  ]

  const min = Math.min(...temperatures)
  const max = Math.max(...temperatures)
  return [min, max]
}

// iteruje 1 x
const computeDomainEfficient = (hours) =>
// reduce zredukuje pole na jednu hodnotu (hodnota moze byt aj nove pole)
  hours.reduce(
    // prvz parameter reducu je redukcna funkcia 
    // prvy parameter redukcnej funkcie je accumulator a druhy je polozka pola
    // pouzivame tu destructuring na parametroch
    ([min, max], {temperature, feelsLike}) => [
      // toco vrati bude pouzite ako parameter v dalsej iteracii
      // v nasom pripade je accumulator pole s 2 polozkami tzv. tuple ktory reprezentuje min a max
      Math.min(min, temperature, feelsLike),
      Math.max(max, temperature, feelsLike),
    ], 
    // druhy parameter je startovacia hodnota (seed value)
    [Infinity, 0]
  )

export default (props) =>
  <div>
    <LineChart height={200} width={800} data={props.hours}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis 
        domain={['dataMin', 'dataMax']}
        dataKey="timestamp" 
        type="number" 
        tickFormatter={timestamp => new Date(timestamp).getHours()} 
      />
      <YAxis dataKey="temperature" domain={computeDomainEfficient(props.hours)}/>
      <Tooltip />
      <Legend />
      <Line 
        type="monotone" 
        dataKey="temperature" 
        stroke="#8884d8" 
        activeDot={{ r: 8 }} 
      />
      <Line 
        type="monotone" 
        dataKey="feelsLike" 
        stroke="#445566" 
        activeDot={{ r: 8 }} 
      />
    </LineChart>
  </div>