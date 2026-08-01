import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleList = () => {
    if(input === "") return;
    setItems([...items, input]);
    setInput("");
  }
  const handleReset = () => {
    setItems([]);
  }
  return (
    <>
      <h1>Add Items to List</h1>
      <input 
      type="text"
      value={input} placeholder="Enter the name" onChange={handleInput} />

      <button 
      onClick={handleList}
      >Add IN List</button>
      <ul>
        {
          items.map((item, index)=> {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button 
      onClick={handleReset}
      >Reset</button>
    </>
  );
}

export default App;
