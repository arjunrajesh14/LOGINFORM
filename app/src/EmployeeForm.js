import React, { Component } from 'react';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: '',
      empName: '',
      deptId: '',
      salary: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, like sending it to a server or storing it in state.
    // For now, let's just log the form data.
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Employee Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="empId">Emp ID:</label>
            <input
              type="text"
              id="empId"
              name="empId"
              value={this.state.empId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="empName">Emp Name:</label>
            <input
              type="text"
              id="empName"
              name="empName"
              value={this.state.empName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="deptId">Dept ID:</label>
            <input
              type="text"
              id="deptId"
              name="deptId"
              value={this.state.deptId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="salary">Salary:</label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={this.state.salary}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
