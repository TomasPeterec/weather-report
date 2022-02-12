import React, {useState} from "react";

const apiAsync = (q) => 
  new Promise(
    (resolve, reject) =>
      setTimeout(resolve, 5000, [`Foo ${q}`, `Gzz ${q}`, `Mim ${q}`, `Gloo ${q}`])
  )



export default () => {
  const [pending, setPending] = useState()
  const [results, setResults] = useState()

  return (
    <div>
      <input onChange={e => {
        setLastQuery(e.target.value)
        setPending(true)
        apiAsync(e.target.value).then(res => {
          
          setResults(res)
        })
      }} />
      
      {pending && <div>Pending</div>}
      {results && 
        <ul>
          {results.map(result => <li>{result}</li>)}
        </ul>
      }
    </div>
  )
}