import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("Our component just mounted.");
  }
  componentDidUpdate(prevState, newState) {
    console.log("Our component just updated.");
    console.log("Prev state: ", prevState);
    console.log("New state: ", newState);
  }
  componentWillUnmount() {
    console.log("Our component just unmounted.");
  }

  render() {
    console.log("Our component just rendered the content.");
    return (
      <div>
        <button
          onClick={() => {
            this.setState((state) => ({
              counter: state.counter + 1,
            }));
          }}
        >
          click me to increase counter: {this.state.counter}
        </button>
        <button
          onClick={() => {
            this.setState((state) => ({
              counter: state.counter - 1,
            }));
          }}
        >
          click me to decrease counter: {this.state.counter}
        </button>
      </div>
    );
  }
}

export default Counter;
