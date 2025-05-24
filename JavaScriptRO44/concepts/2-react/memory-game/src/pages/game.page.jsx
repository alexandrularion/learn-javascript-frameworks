import styles from "./game.module.css";
import GameStats from "../components/game-stats";
import Navigation from "../components/navigation";

const GamePage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__layout"]}>
        <Navigation />
        <GameStats />
      </div>
    </div>
  );
};

export default GamePage;
