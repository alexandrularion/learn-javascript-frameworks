import { useState } from "react";

const WithState = () => {
  // 3 is initial state (initial value)
  const state = useState(3); // useState hook returns an array of 2 elements
  console.log(state); // [3, fn]

  const [increment, setIncrement] = state; // [3, fn]

  console.log("increment", increment); // "increment 3"

  const handleClick = () => {
    // increment = increment + 1; // it will not work because the increment is constant
    setIncrement(increment + 20); // setIncrement fn will update the state with the new value
  };

  return (
    <div>
      <h1 style={{ padding: "20px" }}>{increment}</h1>
      <button onClick={handleClick}>Increment by 1</button>
    </div>
  );
};

export default WithState;
