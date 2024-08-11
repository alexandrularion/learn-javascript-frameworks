import Logo from "../../common/logo/logo";
import Button from "../../common/button/button";
import RestartSVG from "../../assets/restart.svg?react";
import styles from "./board-header.module.css";
import BoardTurn from "../board-turn/board-turn";

const BoardHeader = () => {
  return (
    <div className={styles["container"]}>
      <Logo className={styles["logo"]} />
      <BoardTurn isXTurn={true} />
      <Button className={styles["button"]} variant="tertiary" size="md">
        <RestartSVG />
      </Button>
    </div>
  );
};

export default BoardHeader;
