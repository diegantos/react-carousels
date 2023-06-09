import { Slide1 } from './Components/Slide1/Slide1'
import './App.scss'
import { useEffect, useState } from 'react'
import { Spinner } from './Components/Spinner/Spinner'

function App() {

  const [ isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 2000)
  },[])

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <Slide1 />
      )
    }
    </div>
  )
}

export default App
