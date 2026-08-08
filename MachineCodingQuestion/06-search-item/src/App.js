import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const items = [
    "Apple",
    "Mango",
    "Grapes",
    "Orange",
    "Pineapple"
  ]
  const [sInput, setSInput] = useState('')
  const handleSearch = (e) => {
    setSInput(e.target.value)
  }
  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(sInput.toLowerCase())
  })
  return (
   <div>
    <h1>Search Filter</h1>
    <input 
    type='text'
    placeholder='Enter the value'
    onChange={handleSearch}
    value={sInput}
    />
    <ul>
      {
        filteredItems.map((item, index) => {
          return <li>{item}</li>
        })
      }
    </ul>
   </div>
  );
}

export default App;
