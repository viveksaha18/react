import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'



function App() {
  const [color, setColor] = useState("blue")
  return (
   <div className='w-full h-screen' style={{backgroundColor:color}}> 

   </div>
  )
}

export default App
