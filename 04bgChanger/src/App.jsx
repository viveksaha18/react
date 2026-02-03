import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'



function App() {
  
  let [color, setColor] = useState("blue")
  // Red Background color
  const addRed = () => {
    color = "red";
    setColor(color);
  }
  // Green Background Color
  const addGreen = () => {
    color = 'green';
    setColor(color);
  } 
  // Purple Background Color
  const addPurple = () => {
    color = 'purple';
    setColor(color);
  }
  // Yellow Background Color
  const addYellow = () => {
    color = 'yellow';
    setColor(color);
  }
  return (
   <div className='w-full h-screen' style={{backgroundColor:color}}> 

   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-5 gap-10 bg-amber-300 rounded-3xl py-3 '>
      <button onClick={addRed}>
        Red
      </button>
      <button onClick={addGreen}>
        Green
      </button>
      <button onClick={addPurple}>
        Purple
      </button>
      <button onClick={addYellow}>
        Yellow
      </button>
   </div>

   </div>
  )
}

export default App
