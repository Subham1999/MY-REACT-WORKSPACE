import React from 'react';

/**
 * Example of HigherOrderComponents
 */
const UpdateCounter = (OriginalCounterComponent) => {
  class NewCounterComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };

      // this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <OriginalCounterComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }

  return NewCounterComponent;
};

export default UpdateCounter;
