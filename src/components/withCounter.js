import React from "react";

const withCounter = (WrappedComponent, value) => {
  class WithCounter extends React.Component {
    state = {
      count: 0
    };

    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + value };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
