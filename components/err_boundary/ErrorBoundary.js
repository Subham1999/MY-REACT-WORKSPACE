import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErr: false,
      errMsg: '',
    };
    console.log('ErrorBoundary --created ', this.props.children);
  }

  static getDerivedStateFromError(err) {
    return { hasErr: true };
  }

  componentDidCatch(err, errInfo) {
    console.log('Error ', JSON.stringify(errInfo));
  }

  render() {
    if (this.state.hasErr) {
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
