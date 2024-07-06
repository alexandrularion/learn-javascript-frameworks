// Exercise 7: Type Aliases
// Create a type alias for a union type of string literals: "small" | "medium" | "large".
// Write a function that takes a size and returns a corresponding message.
// Extend the type alias to include "extra-large".

type Size = "small" | "medium" | "large" | "extra-large";
const size1: Size = "medium";

const getSizeGreeting = (size: Size) => {
  if (size === "small") {
    return "You chose a small package.";
  } else if (size === "medium") {
    return "You chose a medium package.";
  } else if (size === "large") {
    return "You chose a large package.";
  } else {
    return "You chose a extra large package.";
  }
};

const message1 = getSizeGreeting("large");
console.log(message1); // "You chose a large package."

const message2 = getSizeGreeting("extra-large");
console.log(message2); // "You chose a extra large package."


