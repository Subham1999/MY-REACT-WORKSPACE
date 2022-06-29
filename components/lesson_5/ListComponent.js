import React, { Component } from 'react';

const Name = (props) => {
  return <h5>{props.name}</h5>;
};

class ListComponent extends Component {
  constructor() {
    super();

    this.state = {
      values: ['Google', 'Amazon', 'Meta', 'Adobe'],
    };
  }

  // way - one
  // render() {
  //   return (
  //     <div>
  //       <ul>
  //         <li>
  //           <Name name={this.state.values[0]} />
  //         </li>
  //         <li>
  //           <Name name={this.state.values[1]} />
  //         </li>
  //         <li>
  //           <Name name={this.state.values[2]} />
  //         </li>
  //         <li>
  //           <Name name={this.state.values[3]} />
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // }

  // way - two
  render() {
    const nameList = this.state.values.map((company) => (
      <Name name={company} />
    ));

    return (
      <div>
        <p>Name list</p>
        {nameList}
      </div>
    );
  }
}

export default ListComponent;
