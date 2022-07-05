import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErr: false,
      errMsg: '',
    };
  }

  static getDerivedStateFromError(err) {
    return { showErr: true };
  }

  componentDidCatch(err, errInfo) {
    console.log('Error ', JSON.stringify(err));
  }

  render() {
    if (this.state.showErr) {
      return (
        <div className="card border border-danger">
          <div className="body">Something went wrong</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
