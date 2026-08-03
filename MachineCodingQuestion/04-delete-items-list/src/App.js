import { useState } from "react"

function App() {
  const [itemName, setItemName] = useState("")
  const [addItem, setaddItem] = useState([])

  const handleInput = (e) => {
    setItemName(e.target.value)
  }
  //console.log(itemName)
  const displayItem = () => {
    console.log(itemName)
  }

  const addItemOnList = () => {
    setaddItem([...addItem, itemName])
    setItemName("");
  }
  const showElement = () => {
     console.log(addItem)
  }
 
  const deleteItem = (idx) => {
    const newItemList = addItem.filter((value, index) => idx !== index);
    setaddItem(newItemList);
  }
  
  return (
    <div>
    <input 
    value={itemName}
    type="text"
    placeholder="Enter the item name"
    onChange={handleInput}
    />

    <br />
    <br />

    <button
    onClick={displayItem}
    >Display</button>

    <br />
    <br />
    <button
    onClick={addItemOnList}
    >Add</button>


    <button
    onClick={showElement}
    >
      showItem
    </button>


    <br />
    <br />
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {addItem.map((value, index) => {
          return(
            <tr key={index}>
              <td>{value}</td>
              <td><button
              onClick={() => deleteItem(index)}
              >Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}

export default App;