import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
