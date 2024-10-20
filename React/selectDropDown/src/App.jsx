import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[userName,setUserName]=useState([])
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>{

        setUserName(users)
        setLoading(false)

      })
  },[])

  return (
    <>
     <div className="App">
        <select name="" id="">
          {
            loading ? (<option value="Loading">Loading...</option>) : userName.length > 0 &&
              (
                userName.map(user => (
                  <option value={user.id} key={user.id}>
                    {user.name}
                  </option>
                ))
              )
          }
        </select>
      </div>
    </>
  )
}

export default App
