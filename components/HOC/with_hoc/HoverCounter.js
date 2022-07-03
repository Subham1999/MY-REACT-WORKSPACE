import React from 'react';
import UpdateCounter from './UpdateCounter';

class HoverCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /**
     * props are coming from higher-order-component
     */
    const { count, incrementCount } = this.props;

    return (
      <h3 onMouseEnter={incrementCount}>hoc - mouse-entered {count} times</h3>
    );
  }
}

export default UpdateCounter(HoverCounter);
