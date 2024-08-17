import Heading from "../../common/heading/heading";
import styles from "./win-lose-dialog.module.css";
import XMarkSVG from "../../assets/x.svg?react";
import OMarkSVG from "../../assets/o.svg?react";
import Button from "../../common/button/button";
import Dialog from "../../common/dialog/dialog";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../common/constants";

const WinLoseDialog = (props) => {
  const navigate = useNavigate();

  const handleQuitClick = () => {
    navigate("/");
    // do other stuff
  };

  const handleNextRoundClick = () => {
    // Reset the board state to the initial grid array
    props.setBoard(CONSTANTS.BOARD_GRID);

    // Reset the player who win to default (to close the dialog)
    props.setWinPlayer(null);
  };

  return (
    <Dialog isOpen={props.isOpen}>
      <div className={styles["container"]}>
        <Heading size="xs" color="var(--text-color)">
          {props.hasXWon ? "YOU WON" : "OH NO, YOU LOST..."}
        </Heading>
        <div className={styles["container__main"]}>
          {props.hasXWon ? <XMarkSVG /> : <OMarkSVG />}
          <Heading
            color={props.hasXWon ? "var(--app-color-2)" : "var(--app-color-4)"}
          >
            TAKES THE ROUND
          </Heading>
        </div>
        <div className={styles["container__buttons"]}>
          <Button size="md" variant="tertiary" onClick={handleQuitClick}>
            QUIT
          </Button>
          <Button size="md" onClick={handleNextRoundClick}>
            NEXT ROUND
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default WinLoseDialog;
