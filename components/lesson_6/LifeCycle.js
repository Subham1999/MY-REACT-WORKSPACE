import React from 'react';

class LifeCycle extends React.Component {
  /**
   * Will be invoked first
   */
  constructor(props) {
    super(props);

    this.state = {
      myName: 'Subham Santra',
      val1: '8181',
    };
    console.log('constructor');
  }

  /**
   * Will be invoked second
   */
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return state;
  }

  /**
   * Will be invoked third
   */
  render() {
    console.log('render');
    return (
      <React.Fragment>
        <h4>Rendered {this.state.myName}</h4>
        <h4>componentDidMount change : {this.state.val1}</h4>
      </React.Fragment>
    );
  }

  /**
   * Will be invoked fourth -- After DOM rendering
   */
  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({
        val1: 718171,
      });
    }, 3000);
  }
}

export default LifeCycle;
