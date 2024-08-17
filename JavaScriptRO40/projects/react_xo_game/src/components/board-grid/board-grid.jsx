import CONSTANTS from "../../common/constants";
import BoardItem from "../board-item/board-item";
import styles from "./board-grid.module.css";
import React from "react";

const checkWin = (player, board) => {
  for (let i = 0; i < CONSTANTS.WINNING_COMBINATIONS.length; i++) {
    const [a, b, c] = CONSTANTS.WINNING_COMBINATIONS[i];
    if (
      board[a].player === player &&
      board[b].player === player &&
      board[c].player === player
    ) {
      return true;
    }
  }
  return false;
};

const BoardGrid = (props) => {
  const { board, setBoard, setWinPlayer, winPlayer } = props;

  const [player, setPlayer] = React.useState(CONSTANTS.PLAYER_X);
  const [chosenPlayer, setChosenPlayer] = React.useState(CONSTANTS.PLAYER_X);

  const handleClick = (index) => {
    // check if the player property is not null
    if (board[index].player || player !== chosenPlayer) {
      // exit from the function without doing anything
      return;
    }

    board[index].player = player;
    const newBoard = [...board];
    setBoard(newBoard);

    // check if the real player has matched a winning combination
    const hasPlayerWon = checkWin(player, newBoard);
    if (hasPlayerWon) {
      // We set the win player that is used in the parent component
      setWinPlayer(player);
    }

    // we check first the type of the player chosen at main menu
    setPlayer(
      chosenPlayer === CONSTANTS.PLAYER_X
        ? CONSTANTS.PLAYER_O
        : CONSTANTS.PLAYER_X
    );
  };

  React.useEffect(() => {
    if (player !== chosenPlayer && winPlayer === null) {
      const timer = setTimeout(() => {
        const emptyItems = board.filter((item) => item.player === null);

        if (emptyItems.length === 0) {
          return;
        }

        const randomIndex = Math.floor(Math.random() * emptyItems.length);
        const item = emptyItems[randomIndex];

        board[item.index].player = player;
        const newBoard = [...board];
        setBoard(newBoard);

        // check if the boot player has matched a winning combination
        const hasPlayerWon = checkWin(player, newBoard);
        if (hasPlayerWon) {
          // We set the win player that is used in the parent component
          setWinPlayer(player);
        }

        setPlayer(
          chosenPlayer === CONSTANTS.PLAYER_X && player !== CONSTANTS.PLAYER_O
            ? CONSTANTS.PLAYER_O
            : CONSTANTS.PLAYER_X
        );
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [player, board, chosenPlayer, setBoard, setWinPlayer, winPlayer]);

  React.useEffect(() => {
    const lsChosenPlayer = localStorage.getItem(
      CONSTANTS.LOCAL_STORAGE.PLAYER_TYPE
    );
    setChosenPlayer(lsChosenPlayer);
  }, []);

  return (
    <div className={styles["container"]}>
      {board.map((item) => (
        <BoardItem
          key={item.id}
          index={item.index}
          player={item.player}
          isDisabled={player !== chosenPlayer}
          onClick={() => handleClick(item.index)}
        />
      ))}
    </div>
  );
};

export default BoardGrid;
