import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeData from "./EmployeeData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  // Delete Employee
  const handleDelete = (id) => {
    if (
      window.confirm(`Are you sure you want to delete Employee ID ${id}?`)
    ) {
      setData(data.filter((employee) => employee.id !== id));

      // Clear form if deleted employee was selected
      if (id === Number(id)) {
        clearForm();
      }
    }
  };

  // Edit Employee
  const handleEdit = (id) => {
    const employee = data.find((emp) => emp.id === id);

    if (employee) {
      setId(employee.id);
      setName(employee.name);
      setPosition(employee.position);
      setDepartment(employee.department);
      setSalary(employee.salary);
    }
  };

  // Update Employee
  const handleUpdate = () => {
    if (
      name === "" ||
      position === "" ||
      department === "" ||
      salary === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    const updatedEmployees = data.map((employee) => {
      if (employee.id === id) {
        return {
          ...employee,
          name,
          position,
          department,
          salary: Number(salary),
        };
      }
      return employee;
    });

    setData(updatedEmployees);
    alert("Employee Updated Successfully!");

    clearForm();
  };

  // Clear Form
  const clearForm = () => {
    setId(0);
    setName("");
    setPosition("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div className="container mt-5">
      {/* Edit Form */}
      <div className="card shadow mb-4">
        <div className="card-header bg-primary text-white">
          <h3>Edit Employee</h3>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">ID</label>
              <input
                type="text"
                className="form-control"
                value={id}
                disabled
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Position</label>
              <input
                type="text"
                className="form-control"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                className="form-control"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            <div className="col-md-12">
              <button
                className="btn btn-success me-2"
                onClick={handleUpdate}
              >
                Update Employee
              </button>

              <button
                className="btn btn-secondary"
                onClick={clearForm}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Table */}
      <table className="table table-striped table-bordered table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
            <th width="180">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>₹{employee.salary}</td>

              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(employee.id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;