import React from 'react';

const GreetSomeone = () => {
  let names = ['Subham Santra', 'Nilimesh Santra'];
  let ages = [23, 57];
  return (
    <div className="row">
      <div className="col-offset-2 col-md-4">
        <table className="table table-bordered text-mute">
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{names[0]}</td>
              <td>{ages[0]}</td>
            </tr>
            <tr>
              <td>{names[1]}</td>
              <td>{ages[1]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GreetSomeone;
