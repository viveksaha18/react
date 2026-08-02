import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [item, setItem] = useState([]);

  const handleItem = (e) => {
    setName(e.target.value);
  }
  //console.log(name);

  const addItem = () => {
    setItem([...item, name]);
    setName("");
  }
  //console.log(item);

  const deleteItem = (index) => {
    const newItemList = item.filter((element, i) => index !== i);
    console.log(newItemList)
    setItem(newItemList)
  }
  return (
    <div>
      <input 
      type='text'
      placeholder='Enter an element'
      value={name}
      onChange={handleItem}
      />
      <br />
      <br />
      <br />
      <button
      onClick={addItem}
      >Add</button>

      <br />
      <br/>
      <br />
      <table>
        <thead>
          <tr>
          <th>Items</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           {item.map((i, index) => {
          return(
            <tr key={index}>
              <td>{i}</td>
              <td>
                <button
                onClick={() => deleteItem(index)}
                >Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody>
       
      </table>
    </div>
  );
}

export default App;
