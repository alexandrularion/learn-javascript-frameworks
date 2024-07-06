// Exercise 10: Tuples
// Define a tuple type that represents a coordinate (x, y).
// Write a function that takes a coordinate tuple and returns a formatted string.
// Create a function that calculates the distance between two coordinates.

type Coordinate = [number, number];

const getGreetingByCoordinate = (coordinate: Coordinate) => {
  const [x, y] = coordinate;
  return `You are at x:${x}, y: ${y}`;
};

const message1 = getGreetingByCoordinate([10, 20]);
console.log(message1); // "You are at x:10, y: 20"

const calculateDistance = (
  coordinate1: Coordinate,
  coordinate2: Coordinate
) => {
  const [x1, y1] = coordinate1;
  const [x2, y2] = coordinate2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

const distance1 = calculateDistance([2, 5], [3, 10]);
console.log(distance1); // 5.0990195135927845