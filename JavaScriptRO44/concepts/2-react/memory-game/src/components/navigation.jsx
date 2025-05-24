import styles from "./navigation.module.css";
import Heading from "../common/heading";
import Button from "../common/button";

const Navigation = () => {
  return (
    <div className={styles["container"]}>
      <Heading
        as="h2"
        style={{
          color: "var(--color-secondary-400)",
        }}
      >
        memory
      </Heading>
      <div className={styles["container__buttons"]}>
        <Button size="md" variant="primary">
          Restart
        </Button>
        <Button size="md" variant="secondary">
          New Game
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
