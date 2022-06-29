import React, { Component } from 'react';

const personList = [
  {
    empId: 91000,
    name: 'Subham Santra',
    manager: 'Madhusudan Rao K',
    org: 'Cognizant',
  },
  {
    empId: 91001,
    name: 'Archana Kumari',
    manager: 'Babita Nayak',
    org: 'Cognizant',
  },
  {
    empId: 91002,
    name: 'Shreya Bhattacharya',
    manager: 'Babita Nayak',
    org: 'Cognizant',
  },
  {
    empId: 91003,
    name: 'Hemachander R',
    manager: 'Babita Nayak',
    org: 'Cognizant',
  },
];

const PersonCard = (props) => {
  return (
    <div className="card m-2">
      <div className="card-body shadow">
        <table className="table table-hover">
          <tbody>
            <tr>
              <td colSpan="1" className="text-end">
                Name
              </td>
              <td colSpan="2" className="text-end">
                {props.name}
              </td>
            </tr>
            <tr>
              <td colSpan="1" className="text-end">
                Manager
              </td>
              <td colSpan="2" className="text-end">
                {props.manager}
              </td>
            </tr>
            <tr>
              <td colSpan="1" className="text-end">
                Org
              </td>
              <td colSpan="2" className="text-end">
                {props.org}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

class ListComponentAdv extends Component {
  constructor() {
    super();

    this.state = {
      personList: personList,
    };
  }

  render() {
    const personJsxList = this.state.personList.map((person) => (
      <PersonCard
        key={person.empId}
        name={person.name}
        manager={person.manager}
        org={person.org}
      />
    ));

    console.log(personJsxList);
    return (
      <div>
        <h3>Person List</h3>
        {personJsxList}
        {/* <PersonCard /> */}
      </div>
    );
  }
}

export default ListComponentAdv;
