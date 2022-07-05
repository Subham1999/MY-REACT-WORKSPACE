import React from 'react';
import ErrChild from './ErrChild';
import ErrorBoundary from './ErrorBoundary';

class ErrParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card shadow">
        <div className="card-body">
          <ErrorBoundary>
            <ErrChild name="Subham" showErr="true" />
          </ErrorBoundary>
          <ErrorBoundary>
            <ErrChild name="Madhusudan" showErr="false" />
          </ErrorBoundary>
          <ErrorBoundary>
            <ErrChild name="Raghvendra" showErr="false" />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default ErrParent;
