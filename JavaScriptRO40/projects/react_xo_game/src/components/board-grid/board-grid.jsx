import CONSTANTS from "../../common/constants";
import BoardItem from "../board-item/board-item";
import styles from "./board-grid.module.css";
import React from "react";

const BoardGrid = () => {
  const [board, setBoard] = React.useState([
    {
      id: "8639f223-d1e5-4ca8-95c5-7cdf73acc33e",
      index: 0,
      player: null,
    },
    {
      id: "18ca9928-69de-4690-ac19-ea44a802bb04",
      index: 1,
      player: null,
    },
    {
      id: "642750b3-6708-44cf-bae8-4846980acd11",
      index: 2,
      player: null,
    },
    {
      id: "3664a17d-d2b7-4a12-839b-ec99ec2e6347",
      index: 3,
      player: null,
    },
    {
      id: "0e7fbd3b-2a4e-4c27-a570-e8b3e174cde1",
      index: 4,
      player: null,
    },
    {
      id: "8c6924d1-c800-4c50-80f8-9451e4a30253",
      index: 5,
      player: null,
    },
    {
      id: "441a1074-46d2-4a17-a827-4b0b25304b02",
      index: 6,
      player: null,
    },
    {
      id: "3ebfa318-db80-4ffe-a71e-c392e5b661e0",
      index: 7,
      player: null,
    },
    {
      id: "92c0a04a-6895-4023-94dc-e92ef0084190",
      index: 8,
      player: null,
    },
  ]);

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

    // we check first the type of the player chosen at main menu
    setPlayer(
      chosenPlayer === CONSTANTS.PLAYER_X
        ? CONSTANTS.PLAYER_O
        : CONSTANTS.PLAYER_X
    );
  };

  React.useEffect(() => {
    if (player !== chosenPlayer) {
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
        setPlayer(
          chosenPlayer === CONSTANTS.PLAYER_X && player !== CONSTANTS.PLAYER_O
            ? CONSTANTS.PLAYER_O
            : CONSTANTS.PLAYER_X
        );
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [player, board, chosenPlayer]);

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
