import React from 'react';

class NormalNameComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(`******* NormalNameComponents Mounted ${this.props.name}`);
  }

  componentDidUpdate() {
    console.log(`######## NormalNameComponents Updated ${this.props.name}`);
  }

  render() {
    console.log(`%%%%%%% NormalNameComponents render ${this.props.name}`);
    const { name } = this.props;
    return (
      <div className="card shadow">
        <div className="card-body">In NormalComponent Name is {name}</div>
      </div>
    );
  }
}

export default NormalNameComponents;
