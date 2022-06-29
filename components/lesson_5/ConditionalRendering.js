import React, { Component } from 'react';

export default class ConditionalRendering extends Component {
  constructor() {
    super();

    this.state = {
      condition: false,
      text1: 'Some random stuff',
      text2: 'Yet Another Random Stuff',
    };
  }

  // way - one
  // render() {
  //   if (this.state.condition) {
  //     return <div>{this.state.text1}</div>;
  //   } else {
  //     return <div>{this.state.text2}</div>;
  //   }
  // }

  // way - two
  render() {
    return this.state.condition ? (
      <div>{this.state.text1}</div>
    ) : (
      <div>{this.state.text2}</div>
    );
  }
}
