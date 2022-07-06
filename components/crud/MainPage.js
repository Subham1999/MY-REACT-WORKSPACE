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

class MainPage extends React.Component {
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

    return (
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
            />
            <select name="department" id="department" className="form-control">
              <optgroup>{DepartmentOptionList}</optgroup>
            </select>
            <br />
            <button className="btn btn-outline-success">submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
