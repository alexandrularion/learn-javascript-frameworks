import React from "react";

const Button = () => {
  // Tip: useState hook always returns an array of 2 elements
  // Tip: 1st element - getter - represents the value of the state
  // Tip: 2nd element - setter - represents the function that can update the state
  const [counter, setCounter] = React.useState(1); // Tip: the setter should always start with "set" prefix

  let counter2 = counter; // Tip: The variables which include any state or props will automatically update

  // Tip: The component (ui returned) will always update due to state or props modifications
  return (
    <button
      onClick={() => {
        setCounter(counter + 10);
      }}
    >
      Increment the number: {counter}/ Counter2: {counter2}
    </button>
  );
};

export default Button;
