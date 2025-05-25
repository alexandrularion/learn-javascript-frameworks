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
  const [moves, setMoves] = React.useState(0);
  const [pair, setPair] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState([]);

  const config = useConfig();

  const isGameOver = React.useMemo(() => {
    const factor = config.grid.includes("4") ? 4 : 6;
    return count === (factor * factor) / 2;
  }, [config.grid, count]);

  React.useEffect(() => {
    const factor = config.grid.includes("4") ? 4 : 6;

    // NOTE: Generated items based on the factor (4 / 6)
    const generatedItems = generateItems(factor);

    // NOTE: Save the generated items to be displayed in game board
    setItems(generatedItems);
  }, [config]);

  React.useEffect(() => {
    if (pair.length === 2) {
      const checkPair = () => {
        const [firstItem, secondItem] = pair;
        if (firstItem.value !== secondItem.value) {
          setItems(
            items.map((currentItem) => {
              if (
                currentItem.id === firstItem.id ||
                currentItem.id === secondItem.id
              ) {
                return { ...currentItem, status: "hidden" };
              }
              if (currentItem.status === "just-revealed") {
                return {
                  ...currentItem,
                  status: "revealed",
                };
              }
              return currentItem;
            })
          );
        } else {
          setItems(
            items.map((currentItem) => {
              if (currentItem.status === "just-revealed") {
                return {
                  ...currentItem,
                  status: "revealed",
                };
              }
              return currentItem;
            })
          );
          setCount((count) => count + 1);
        }
        setPair([]);
        setMoves((currentMoves) => currentMoves + 1);
      };

      // NOTE: Check if the pair doesn't match after 1 second
      setTimeout(checkPair, 1000);
    }
  }, [pair, items, setItems]);

  return {
    items,
    moves,
    count,
    pair,
    isGameOver,
    setItems,
    setCount,
    setMoves,
    setPair,
  };
};

export default useGrid;
export { generateItems };
