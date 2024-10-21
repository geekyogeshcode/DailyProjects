import { useState } from 'react'
import './App.css'

function App() {
  const[number,setNumber]=useState(0)

  return (
    <>
      <div className="App">
  {
    <h1>{number}</h1>
  }
  <div>
    <button onClick={() => number<10 && setNumber(number+1)}>Increase</button>
    <button onClick={() => number>0 && setNumber(number-1)}>Decrease</button>
    <button onClick={() => setNumber(0)}>Reset</button>
  </div>
</div>
    </>
  )
}

export default App
