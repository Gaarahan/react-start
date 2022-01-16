import React from 'react';

export default class GameRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  doReset() {
    this.props.onReset?.();
    this.setState({
      hasError:false
    })
  }

  render() {
    if (this.state.hasError) {
      return <div>
        <h3>Game render error, pls retry</h3>
        <button onClick={() => this.doReset()}>Recovery</button>
      </div>;
    }

    return this.props.children;
  }
}

