import styles from "./game.module.css";
import GameStats from "../components/game-stats";
import Navigation from "../components/navigation";
import GameBoard from "../components/game-board";
import React from "react";
import useGrid from "../hooks/use-grid";
import GameOverModal from "../components/game-over-modal";

const GamePage = () => {
  const [date, setDate] = React.useState(new Date(0, 0, 0, 0, 0, 0));
  const { items, pair, moves, isGameOver, setItems, setPair, setMoves } =
    useGrid();

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
      <GameOverModal isOpen={isGameOver} />
    </div>
  );
};

export default GamePage;
