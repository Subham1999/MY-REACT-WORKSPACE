import React from 'react';
import UpdateCounter from './UpdateCounter';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /**
     * props are coming from higher-order-component
     */
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>hoc - clicked {count} times</button>
    );
  }
}

export default UpdateCounter(ClickCounter);
