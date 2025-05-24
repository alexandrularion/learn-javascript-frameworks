import styles from "./game.module.css";
import GameStats from "../components/game-stats";
import Navigation from "../components/navigation";
import GameBoard from "../components/game-board";

const GamePage = () => {
  // TEMPORARY
  const items = [
    { status: "hidden", value: 8 },
    { status: "just_revealed", value: 7 },
    { status: "revealed", value: 9 },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["container__layout"]}>
        <Navigation />
        <GameBoard grid="4x4" items={items} />
        <GameStats />
      </div>
    </div>
  );
};

export default GamePage;
