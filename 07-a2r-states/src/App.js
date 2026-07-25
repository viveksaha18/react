
import EmployeeData from './EmployeeData';
import {useEffect, useState} from 'react';
function App() {
  const[data, setData] = useState([]);
  const[id, setId] = useState(0);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState(0);
  
  useEffect(() => {
    setData(EmployeeData);
  }, []);
  console.log(data);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((employee) => {
              return (
                <tr>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>{employee.salary}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
