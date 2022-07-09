import React from 'react';

const DepartmentList = [
  'Select department',
  'Computer Science and Engineering',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Electronics and Communication Engineering',
  'Civil Engineering',
  'Chemical Engineering',
];

/**
 * Drawback of this approach is it re-renders all the student elements
 * When there is any input change
 */
const StudentElement = ({ name, dept }) => {
  console.log('Rendering -- ', name);
  return (
    <div className="card shadow">
      <div className="card-body justify-content-between">
        <span className="d-flex">{name}</span>
        <span className="d-flex">{dept}</span>
      </div>
    </div>
  );
};

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      dept: '',
      students: [],
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value }, () =>
      console.log(this.state.name)
    );
  };

  onDeptChange = (event) => {
    this.setState({ dept: event.target.value }, () =>
      console.log(this.state.dept)
    );
  };

  onSubmitForm = (event) => {
    const { name, dept } = this.state;
    if (name === null || name === '') {
      alert('Name can not be empty');
      return;
    }
    if (dept === null || dept === '' || dept === DepartmentList[0]) {
      alert('Select a department');
      return;
    }

    const newStudent = { name: name, dept: dept };
    const newStudentList = this.state.students;
    newStudentList.push(newStudent);
    this.setState({ name: '', dept: '', students: newStudentList }, () => {
      console.log(this.state);
    });
  };

  generateKey = () => Math.round(Math.random() * 10000000);

  render() {
    const DepartmentOptionList = DepartmentList.map((department) => {
      if (department === 'Select Department') {
        return (
          <option value={department} selected>
            {department}
          </option>
        );
      } else {
        return <option value={department}>{department}</option>;
      }
    });

    const StudentListElement = this.state.students.map((student) => (
      <StudentElement
        name={student.name}
        dept={student.dept}
        key={this.generateKey}
      />
    ));

    return (
      <div>
        <div className="card shadow">
          <div className="card-title text-center">
            <b>Student Enrollment Form</b>
          </div>
          <div className="card-body">
            <div className="form">
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={this.state.name}
                onChange={this.onNameChange}
              />
              <select
                name="department"
                id="department"
                className="form-control"
                value={this.state.dept}
                onChange={this.onDeptChange}
              >
                <optgroup>{DepartmentOptionList}</optgroup>
              </select>
              <br />
              <button
                className="btn btn-outline-success"
                onClick={this.onSubmitForm}
              >
                submit
              </button>
            </div>
          </div>
        </div>
        <div className="studentList">{StudentListElement}</div>
      </div>
    );
  }
}

export default MainPage;
