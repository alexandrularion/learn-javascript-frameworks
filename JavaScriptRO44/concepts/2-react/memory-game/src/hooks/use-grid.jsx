import React from "react";
import useConfig from "./use-config";

const generateItems = (factor) => {
  const totalItems = factor * factor;
  // NOTE: Generate pairs of numbers like [1,1,2,2,3,3]
  const pairedItems = Array.from(
    { length: totalItems / 2 },
    (_, i) => i + 1
  ).flatMap((value) => [value, value]);

  // NOTE: Randomize the pairs
  const shuffleItems = pairedItems.sort(() => Math.random() - 0.5);

  // NOTE: Format the items (always the status will be hidden)
  const items = shuffleItems.map((number, index) => {
    return {
      id: index,
      status: "hidden",
      value: number,
    };
  });

  return items;
};

const useGrid = () => {
  const [items, setItems] = React.useState([]);

  const config = useConfig();

  React.useEffect(() => {
    const factor = config.grid.includes("4") ? 4 : 6;

    // NOTE: Generated items based on the factor (4 / 6)
    const generatedItems = generateItems(factor);

    // NOTE: Save the generated items to be displayed in game board
    setItems(generatedItems);
  }, [config]);

  return { items, setItems };
};

export default useGrid;
export { generateItems };
