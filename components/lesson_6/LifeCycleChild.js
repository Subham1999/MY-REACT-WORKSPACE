import React from 'react';

class LifeCycleChild
  // Will look for state changes then only re-renders
  // extends React.PureComponent

  // Will re-render on parent changes
  extends React.Component
{
  /**
   * Will be invoked first
   */
  constructor(props) {
    super(props);

    this.state = {};
    console.log('child --> constructor');
  }

  /**
   * Will be invoked second
   */
  static getDerivedStateFromProps(props, state) {
    console.log('child --> getDerivedStateFromProps');
    return state;
  }

  /**
   * Will be invoked third
   */
  render() {
    console.log('child --> render');
    return (
      <React.Fragment>
        <h4>Child rendered</h4>
      </React.Fragment>
    );
  }

  /**
   * Will be invoked fourth -- After DOM rendering
   */
  componentDidMount() {
    console.log('child --> componentDidMount');
  }
}

export default LifeCycleChild;
