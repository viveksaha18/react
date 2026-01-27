import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai.jsx';
function App() {
  const [count, setCount] = useState(0)

/* 
<> </> is called fragment in react 
you cannot return multiple elements from a component without wrapping them in a single parent element 
either go with div or use fragment for a single parent element
*/ 
  return (
    <>
    
    <h1>Learning React</h1>
    <Chai />
    </>
    
  )
}

export default App
