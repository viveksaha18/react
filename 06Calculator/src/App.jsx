import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "tailwindcss";

function App() {
  let [num1, setNum1] = useState();
  let [num2, setNum2] = useState();
  let [result, setResult] = useState(0);
  return (
    <>
    <h1 className='text-3xl text-center font-bold mt-10 mb-10'>Calculator Application!</h1>
    <div className='flex flex-col justify-center items-center'
    >
      <input className='border-2 border-gray-400 m-5 p-2'
      type="number" placeholder='Enter first number' required value={num1}
      onChange = {(e)=>{
        setNum1(Number(e.target.value))
      }}
      />
      <input className='border-2 border-gray-400 m-5 p-2'
      type="number" placeholder='Enter the second value' required value={num2} 
      onChange = {(e)=> {
        setNum2(Number(e.target.value))
      }}
      />
      {console.log(num1, num2)}
      <button
      onClick = {() => {
        let val = num1+num2;
        setResult(val);
      }}
      className='bg-blue-500 border rounded cursor-pointer px-5 text-white'
      >Add</button>
      <button
      onClick = {() => {
        let val = num1-num2;
        setResult(val);
      }}
      className='bg-blue-500 border rounded cursor-pointer px-5 text-white mt-3'
      >
        Subtract
      </button>
      <button
      onClick={()=>{
        let val =  num1*num2;
        setResult(val);
      }}
      className='bg-blue-500 border rounded cursor-pointer px-5 text-white mt-3'
      >
        Multiply
      </button>
      <button
      onClick = {()=>{
        let val = num1/num2;
        setResult(val);
      }}
      className='bg-blue-500 border rounded cursor-pointer px-5 text-white mt-3'
      >
        Division
      </button>
    </div>
    <h1  className='text-3xl text-center font-bold mt-10 mb-10'>Result : {result}</h1>
    
    </>
  )
}

export default App
