import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5
  const addValue = () => {
    console.log('clicked')
    counter = counter+1
    setCounter(counter)
    console.log(counter)
  }
  let [counter, setCounter] = useState(5)
  const subtract = () => {
    counter = counter-1
    setCounter(counter)
  }
  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter Application : {counter}</h2>

      <button
      onClick = {addValue}
      >Add</button>
      <br />
      <button
      onClick = {subtract}
      >Sub</button>
    </>
  )
}

export default App
