import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5
  const addValue = () => {
    //Setter function accepts a callback function
    console.log('clicked')
    // Fibres in React batch the state updates for performance optimization
    // So, multiple calls to setCounter in the same event handler will not
    // immediately update the counter variable.
    // It execurtes the last call and overrides the previous ones.
    /*
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)*/
    // To do the previous task we go with callback function
    // because it executes in order
    //do not use curly braces if you are returning something so that you dont need to use return keyword
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
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
