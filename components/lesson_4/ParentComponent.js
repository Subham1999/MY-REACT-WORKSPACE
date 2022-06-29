import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor() {
    super();

    this.state = {
      text: 'Can you change this?',
      count: 0,
      name: 'No name selected',
    };
  }

  nextName = () => {
    let index = this.state.count;
    let names = ['Subham', 'Nilimesh', 'Dolan', 'APJ Abdul Kalam'];
    if (index === names.length - 1) {
      index = 0;
    } else {
      index += 1;
    }

    this.setState({
      count: index,
      name: names[index],
    });
  };

  changeText = (newText) => {
    this.setState({ text: this.state.text + ' ' + newText });
  };

  render() {
    return (
      <div className="border border-primary p-1">
        <p>We are in parent component</p>
        <p>{this.state.text}</p>
        <button onClick={this.nextName}>click parent</button>
        <ChildComponent name="Subham" textChanger={this.changeText} />
        <hr />
        <ChildComponent name={this.state.name} textChanger={this.nextName} />
        <p>Here parent component ends</p>
      </div>
    );
  }
}

export default ParentComponent;
