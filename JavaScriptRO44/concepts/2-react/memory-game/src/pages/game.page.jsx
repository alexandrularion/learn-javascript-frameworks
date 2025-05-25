import styles from "./game.module.css";
import GameStats from "../components/game-stats";
import Navigation from "../components/navigation";
import GameBoard from "../components/game-board";
import React from "react";
import useGrid from "../hooks/use-grid";

const GamePage = () => {
  const [moves, setMoves] = React.useState(0);
  const [pair, setPair] = React.useState([]);
  const [date, setDate] = React.useState(new Date(0, 0, 0, 0, 0, 0));

  const { items, setItems } = useGrid();

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
        }
        setPair([]);
        setMoves((currentMoves) => currentMoves + 1);
      };

      // NOTE: Check if the pair doesn't match after 1 second
      setTimeout(checkPair, 1000);
    }
  }, [pair, items, setItems]);

  return (
    <div className={styles["container"]}>
      <div className={styles["container__layout"]}>
        <Navigation
          setItems={setItems}
          setPair={setPair}
          setMoves={setMoves}
          setDate={setDate}
        />
        <GameBoard
          items={items}
          pair={pair}
          setItems={setItems}
          setPair={setPair}
        />
        <GameStats setDate={setDate} date={date} moves={moves} />
      </div>
    </div>
  );
};

export default GamePage;
