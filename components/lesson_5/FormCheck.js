import React, { Component } from 'react';

class FormCheck extends Component {
  constructor() {
    super();

    this.students = [];
    this.studentList = [];
    this.state = {
      name: '',
      department: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleDepartmentChange = (event) => {
    this.setState({
      department: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);

    this.students.push({
      name: this.state.name,
      department: this.state.department,
    });

    // console.log(this.students);

    this.setState(
      {
        name: '',
        department: '',
      },
      () => {
        // console.log(this.students);
        this.studentList = this.students.map((student, index) => (
          <tr>
            <td>Name {student.name}</td>
            <td>Department {student.department}</td>
          </tr>
        ));
      }
    );
  };

  render() {
    // console.log('render');
    return (
      <div>
        <div className="card">
          <div className="card-header text-center">
            Enter student details here
          </div>
          <div className="card-body row">
            <div className="offset-3 col-md-6 border border-primary">
              <form onSubmit={this.handleFormSubmit}>
                <table className="table ">
                  <tr>
                    <td>Name</td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="enter name"
                        className="form-input-area"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>
                      <input
                        type="text"
                        name="department"
                        id="department"
                        placeholder="enter department"
                        className="form-input-area"
                        value={this.state.department}
                        onChange={this.handleDepartmentChange}
                      />
                    </td>
                  </tr>
                </table>
                <br />
                <table>
                  <tr>
                    <td>
                      <button className="m-1">Reset</button>
                    </td>
                    <td>
                      <button className="m-1">Submit</button>
                    </td>
                  </tr>
                </table>
              </form>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
        <br />
        <hr />
        <div className="card">
          <div className="card-header">List of added students</div>
          <div className="card-body">
            <div className="row">
              <div className="offset-3 col-md-6">
                <table className="table table-hover">
                  <tbody>{this.studentList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCheck;
