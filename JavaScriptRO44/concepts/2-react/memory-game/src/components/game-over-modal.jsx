import styles from "./game-over-modal.module.css";
import Heading from "../common/heading";
import Button from "../common/button";

const GameOverModal = (props) => {
  return props.isOpen ? (
    <>
      <div className={styles["container--overlay"]} />
      <div className={styles["container"]}>
        <div className={styles["container__header"]}>
          <Heading as="h1">You did it!</Heading>
          <Heading as="h5">Game over! Here’s how you got on…</Heading>
        </div>
        <div className={styles["container__body"]}>
          <div className={styles["body__item"]}>
            <Heading as="h5">Time Elapsed</Heading>
            <Heading as="h3">00:00</Heading>
          </div>
          <div className={styles["body__item"]}>
            <Heading as="h5">Moves Taken</Heading>
            <Heading as="h3">222</Heading>
          </div>
        </div>
        <div className={styles["container__buttons"]}>
          <Button size="md" variant="primary">
            Restart
          </Button>
          <Button size="md" variant="secondary">
            Setup New Game
          </Button>
        </div>
      </div>
    </>
  ) : null;
};

export default GameOverModal;
