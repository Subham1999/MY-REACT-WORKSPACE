import React from 'react';

class ClickCounter extends React.Component {
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
    return <button onClick={this.incrementCount}>clicked {count} times</button>;
  }
}

export default ClickCounter;
