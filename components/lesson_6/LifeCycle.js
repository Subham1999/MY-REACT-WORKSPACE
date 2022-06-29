import React from 'react';
import LifeCycleChild from './LifeCycleChild';

class LifeCycle extends React.Component {
  /**
   * Will be invoked first
   */
  constructor(props) {
    super(props);

    this.state = {
      myName: 'Subham Santra',
      val1: 'It will be changed! wait 4s',
      val2: 'static change??',
    };
    console.log('parent --> constructor');
  }

  /**
   * Will be invoked second
   */
  static getDerivedStateFromProps(props, state) {
    console.log('parent --> getDerivedStateFromProps');
    return { val2: 'Other change' };
  }

  /**
   * Will be invoked third
   */
  render() {
    console.log('parent --> render');
    return (
      <React.Fragment>
        <h4>Rendered {this.state.myName}</h4>
        <h4>componentDidMount change : {this.state.val1}</h4>
        <h4>static change : {this.state.val2}</h4>
        <LifeCycleChild />
      </React.Fragment>
    );
  }

  /**
   * Will be invoked fourth -- After DOM rendering
   */
  componentDidMount() {
    console.log('parent --> componentDidMount');
    setTimeout(() => {
      this.setState({
        val1: 'It is changed',
      });
    }, 4000);
  }
}

export default LifeCycle;
