import React from 'react';

class PureNameComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(`@@@@@ Called getDerivedStateFromProps for ${props.name}`);
    return state;
  }

  componentDidMount() {
    console.log(`******* PureNameComponent Mounted ${this.props.name}`);
  }

  componentDidUpdate() {
    console.log(`######## PureNameComponent Updated ${this.props.name}`);
  }

  render() {
    console.log(`%%%%%%% PureNameComponent render ${this.props.name}`);
    const { name } = this.props;
    return (
      <div className='card shadow'>
        <div className="card-body">
          In PureComponent Name is {name} 
        </div>
      </div>
    );
  }
}

export default PureNameComponent;
