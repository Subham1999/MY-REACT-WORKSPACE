import React, { Component } from 'react';

const PageText = {
  unsubscribed: {
    message: 'Please subscribe our channel',
    buttonText: 'Subscribe',
  },

  subscribed: {
    message: 'Thank you for subscribing our channel',
    buttonText: 'Unsubscribe',
  },

  resultBox: {
    newUser: 'Welcome new user',
    oldUser: 'Welcome again!',
  },
};

const ResultBox = (props) => {
  return (
    <div>
      <h3>{props.text}</h3>
    </div>
  );
};

class StateDemo extends Component {
  constructor(props) {
    super();

    this.state = {
      message: PageText.unsubscribed.message,
      buttonText: PageText.unsubscribed.buttonText,
      props: props,
    };
  }

  isSubscribed() {
    let isSubscribed = this.state.buttonText === PageText.subscribed.buttonText;
    return isSubscribed;
  }

  changeUserName() {
    if (this.isSubscribed()) {
      this.setState({
        message: PageText.unsubscribed.message,
        buttonText: PageText.unsubscribed.buttonText,
        isSubscribed: true,
      });
    } else {
      this.setState({
        message: PageText.subscribed.message,
        buttonText: PageText.subscribed.buttonText,
        isSubscribed: false,
      });
    }
  }

  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        <div>
          <button onClick={() => this.changeUserName()}>
            {this.state.buttonText}
          </button>
        </div>
        <hr />
        <ResultBox text={PageText.resultBox.oldUser} />
      </div>
    );
  }
}

export default StateDemo;
