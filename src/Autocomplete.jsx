import React, {useState} from "react";





export default ({onChange, getOptions}) => {
  const [pending, setPending] = useState()
  const [results, setResults] = useState()
  const [value, setValue] = useState('')
  const [errorMesage, setErrorMesage] = useState()

  return (
    <div>
      <input value={value} onChange={e => {
        setPending(true)
        setValue(e.target.value)
        setErrorMesage()
        // Immediately Invoked Function Expression [IIFE]
        ;((query) => {
          getOptions(e.target.value)
            .then(res => {
            // console.log(query, e.target.value)
              if(query === e.target.value) {
                setResults(res)
                setPending()
              }
            })
            .catch(err => {
              setErrorMesage(err)
              setPending()
            })
        })(e.target.value)
       
      }} />
      {pending && <div>Pending</div>}
      {errorMesage && 
        <div style={{color: 'red'}}>
          Error: {errorMesage}
        </div>}
      {results && 
        <ul>
          {results.map(result => 
            <li key={result} 
              onClick={() => {
                setValue(result)
                setResults()
                onChange(result)
              }}
            >
              {result}
            </li>)}
        </ul>
      }
    </div>
  )
}