import React from 'react';
import NormalNameComponent from './NormalNameComponent';
import PureNameComponent from './PureNameComponent';

class MainAdv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someOtherValue: 100,
      nameList: ['Subham', 'Nilimesh', 'Dolan', 'Ram', 'Shyam'],
    };

    this.incrementSomeOtherValueByOne =
      this.incrementSomeOtherValueByOne.bind(this);

    this.changeName = this.changeName.bind(this);
  }

  incrementSomeOtherValueByOne() {
    const { someOtherValue } = this.state;
    this.setState({
      someOtherValue: someOtherValue + 1,
    });
  }

  changeName() {
    const { nameList } = this.state;
    nameList[0] = 'Subham Santra';
    this.setState({ nameList: nameList });
  }

  componentDidMount() {
    console.log('******** MainAdv MOUNTED');
  }

  componentDidUpdate() {
    console.log('####### MainAdv updated');
  }

  render() {
    console.log('%%%%%%%% MainAdv rendered');
    const NormalNameList = this.state.nameList?.map((name) => (
      // <NormalNameComponent name={name} />
      <PureNameComponent name={name} key={name} />
    ));

    return (
      <div>
        <p>Current Count : {this.state.someOtherValue}</p>
        <button onClick={this.incrementSomeOtherValueByOne}>click me</button>
        <br />
        <button onClick={this.changeName}>change name</button>
        <br />
        <div>{NormalNameList}</div>
      </div>
    );
  }
}

export default MainAdv;
