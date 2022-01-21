import React from "react";


// distructuring of parameters
const LocationSelector = ({labels, onChange}) =>
  <select onChange={(e) => onChange(e.target.value)}>
    {labels.map((label) =>
      <option key={label} value={label}>
        {label}
      </option>
    )}
  </select>

export default LocationSelector
