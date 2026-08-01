import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const handleSearch = (e) => {
    console.log(e);
    console.log(e.target);
    setName(e.target.value);
  }
  return (
    <>
    <h1>Controlled Input</h1>
    <input 
    value={name}
    placeholder='Enter your name'
    onChange={handleSearch}
    />
    <h1>Your name : {name || "Nothing"}</h1>
    </>
  );
}

export default App;
