import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const increase = () => {
    if(counter == 20){
      setCounter(20)
    }else(setCounter(counter + 1))
    
  }

 const decrease = () => {
    if(counter == 0){
      setCounter(0)
    }else(setCounter(counter - 1))
    
  }

  return (
    <>
    <h1>hello from vite | react</h1>
    <h2>counter: {counter}</h2>
    <button onClick={increase}>incraese count</button>
    <br />
    <button onClick={decrease}>decrease count</button>
    </>
  )
}

export default App
