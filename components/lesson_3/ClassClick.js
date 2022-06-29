import React, { Component } from 'react';

class ClassClick extends Component {
  constructor() {
    super();

    this.state = { message: 'I am an Indian' };

    // this is binding
    this.firstEvent = this.firstEvent.bind(this);
  }

  firstEvent() {
    console.log('firstEvent() clicked');
    console.log("'this' is ", this === null);
    this.setState({
      message: "I am an Indian & I believe in 'Vasudeva Kutumvakam'",
    });
  }

  secondEvent = () => {
    console.log('secondEvent() clicked');
    console.log("'this' is ", this === null);
    this.setState({
      message: "I am an Indian & I believe in 'Hinduism'",
    });
  };

  thirdEvent() {
    console.log('thirdEvent() clicked');
    console.log("'this' is ", this === null);
    this.setState({
      message: "I am an Indian & I am a Sanatani'",
    });
  }

  render() {
    return (
      <div className="container">
        <div className="m-2">
          <p className="border border-primary">{this.state.message}</p>
          <br />
          <span className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={this.firstEvent}>
              click here
            </button>
            <button className="btn btn-primary" onClick={this.secondEvent}>
              click here
            </button>
            <button
              className="btn btn-primary"
              onClick={this.thirdEvent.bind(this)}
            >
              click here
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default ClassClick;
