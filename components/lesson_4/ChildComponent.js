import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      props: props,
    };
  }

  changeName = () => {
    this.setState({ name: 'Another name' });
  };

  render() {
    return (
      <div className="border border-warning">
        <div className="p-1 mt-2">
          <p>We are in child component</p>
          <p>We got {this.props?.name} from parent</p>
          <p>Here child component ends</p>
          <button
            onClick={() => {
              this.props.textChanger('subham');
            }}
          >
            click here
          </button>
        </div>
      </div>
    );
  }
}

export default ChildComponent;
