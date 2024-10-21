import { useContext } from 'react'
import './App.css'
import ToggleContext from './ContextApi'

function App() {
const{isToggled,toggle}=useContext(ToggleContext)
  return (
    <>

      <div className="App">
        <h1>{
          isToggled?"Hello Toggle":"WelCome Toggle"
          }</h1>
        <button onClick={toggle}>Change Text</button>
      </div>
    </>
  )
}

export default App
