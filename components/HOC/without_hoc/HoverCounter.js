import React from 'react';

class HoverCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return <h3 onMouseEnter={this.incrementCount}>clicked {count} times</h3>;
  }
}

export default HoverCounter;
