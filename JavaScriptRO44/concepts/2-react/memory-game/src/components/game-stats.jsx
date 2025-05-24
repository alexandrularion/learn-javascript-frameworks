import styles from "./game-stats.module.css";
import Heading from "../common/heading";

const GameStats = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__card"]}>
        <Heading as="h5">Time</Heading>
        <Heading as="h3">00:00</Heading>
      </div>
      <div className={styles["container__card"]}>
        <Heading as="h5">Moves</Heading>
        <Heading as="h3">0</Heading>
      </div>
    </div>
  );
};

export default GameStats;
