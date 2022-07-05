import React from 'react';

class ErrChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, showErr } = this.props;
    if (showErr === 'true') {
      throw Error('something wrong happened!!!');
    }

    return (
      <React.Fragment>
        <div>
          Name : {name} {showErr}
        </div>
      </React.Fragment>
    );
  }
}

export default ErrChild;
