import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name}
          <b>{count}</b>
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
