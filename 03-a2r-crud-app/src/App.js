import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import {useState, useEffect} from 'react';
function App() {
    const[data, setData] = useState([]);
  useEffect(() => {
    setData(Employee);
  }, []);

  const handleEdit = (id) => {
    // Implement edit functionality here
    alert("Edit employee with id: ${id}");
  }

  const handleDelete = (id) => {
    // Implement delete functionality here
    alert("Delete employee with id: ${id}");
  }
  console.log(Employee)
  return (
    <>
     <table class="table table-striped">  
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Position</td>
            <td>Address</td>
            <td>Phone Number</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>{employee.address}</td>
              <td>{employee.phoneNo}</td>
              <td>
                <button class="btn btn-primary" onClick={() => handleEdit(employee.id)}>Edit</button>
                <button class="btn btn-danger" onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default App;
