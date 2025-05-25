import styles from "./navigation.module.css";
import Heading from "../common/heading";
import Button from "../common/button";
import { generateItems } from "../hooks/use-grid";
import useConfig from "../hooks/use-config";
import { useNavigate } from "react-router";

const Navigation = (props) => {
  const config = useConfig();
  const navigate = useNavigate();

  const resetGame = () => {
    // NOTE: Reset the states to the initial value
    const factor = config.grid.includes("4") ? 4 : 6;
    props.setItems(generateItems(factor));
    props.setPair([]);
    props.setMoves(0);
    props.setDate(new Date(0, 0, 0, 0, 0, 0));
  };

  const handleRestartClick = () => {
    const shouldReset = confirm("Are you sure you want to restart the game?");
    if (shouldReset) {
      resetGame();
    }
  };

  const handleNewGameClick = () => {
    // NOTE: Reset the states
    resetGame();

    // NOTE: Redirect to the start page
    navigate("/");
  };

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
        <Button size="md" variant="primary" onClick={handleRestartClick}>
          Restart
        </Button>
        <Button size="md" variant="secondary" onClick={handleNewGameClick}>
          New Game
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
