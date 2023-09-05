// src/components/EmployeeForm.js

import React, { useState } from 'react';

function EmployeeForm() {
  const [empId, setEmpId] = useState('');
  const [empName, setEmpName] = useState('');
  const [deptId, setDeptId] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      empId,
      empName,
      deptId,
      salary,
    };

    // You can send a POST request to your Python Firebase backend here
    // using axios or the fetch API.
    // Make sure your Python Firebase backend API is set up to receive and handle this data.
    console.log('Submitting employee data:', employeeData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Emp ID:</label>
        <input
          type="text"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />
      </div>
      <div>
        <label>Emp Name:</label>
        <input
          type="text"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
        />
      </div>
      <div>
        <label>Dept ID:</label>
        <input
          type="text"
          value={deptId}
          onChange={(e) => setDeptId(e.target.value)}
        />
      </div>
      <div>
        <label>Salary:</label>
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
