import { useState } from "react";


function App() {
  const [itemValue, setItemValue] = useState("")
  const [addItem, setaddItem] = useState([])
  const [editValue, setEditValue] = useState("");
  const [editIdx, setEditIdx] = useState(null)
  const handleInput = (e) => {
    setItemValue(e.target.value)
  }
  //console.log(itemValue)
  const addItemInList = () => {
    setaddItem([...addItem, itemValue])
    setItemValue("");
  }

  // delete item

  const deleteItem = (idx) => {
    const newItemList = addItem.filter((value, index) => idx !== index)
    setaddItem(newItemList)
  }

  // edit Item
  const handleEdit = (idx) => {
    setEditValue(addItem[idx])
    setEditIdx(idx)
  }

  const handleSave = (idx) => {
    const newList = [...addItem]
    newList[editIdx] = editValue;
    setaddItem(newList)
    setEditValue("")
    setEditIdx(null)
  }
  return (
    <div>
      <input 
      value={itemValue}
      type="text"
      placeholder="Enter The Item"
      onChange={handleInput}
      />
      <br />
      <br />
      <input 
      value={editValue}
      type="text"
      placeholder="Enter the edit value"
      onChange={(e) => setEditValue(e.target.value)}
      />
      <br />
      <br />
      
      <br />
      <br />
      <button
      onClick={addItemInList}
      >
        Add
      </button>

      <table>
        <thead>
          <tr>
            <th>ItemName</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {addItem.map((value, index) => {
            return (
              <tr key={index} >
                <td>{value}</td>
                <td>
                  <button
                  onClick={() => deleteItem(index)}
                  >Delete</button>
                </td>
                <td>
                  <button
                  onClick={() => handleEdit(index)}
                  >Edit</button>
                  <button
                  onClick={() => handleSave(index)}
                  >Save</button>
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
