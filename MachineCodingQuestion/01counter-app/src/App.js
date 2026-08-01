import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [val, setValue] = useState(0);
  const addValue = () => {
    setValue((val) => val+1);
    setValue((val) => val+1);
    setValue((val) => val+1);
  }
  const subValue = () => {
    setValue((val) => val-1);
  }
  const resetValue = () => {
    setValue(0);
  }
  return (
    <div>
      <h1>Count : {val}</h1>
      <br />
      <br />
      <button onClick={addValue}>Increment</button>
      <br />
      <br />
      <button onClick={subValue}>Decrement</button>
      <br />
      <br />
      <button onClick={resetValue}>Reset</button>
    </div>
  );
}

export default App;
