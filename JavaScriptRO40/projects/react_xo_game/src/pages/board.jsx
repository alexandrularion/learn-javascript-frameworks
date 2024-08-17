import CONSTANTS from "../common/constants";
import Layout from "../common/layout/layout";
import BoardFooter from "../components/board-footer/board-footer";
import BoardGrid from "../components/board-grid/board-grid";
import BoardHeader from "../components/board-header/board-header";
import WinLoseDialog from "../components/win-lose-dialog/win-lose-dialog";
import React from "react";

const BoardPage = () => {
  const [board, setBoard] = React.useState(CONSTANTS.BOARD_GRID);
  const [winPlayer, setWinPlayer] = React.useState(null); // falsy value by default

  return (
    <Layout>
      <BoardHeader />
      <BoardGrid
        board={board}
        setBoard={setBoard}
        winPlayer={winPlayer}
        setWinPlayer={setWinPlayer}
      />
      <BoardFooter />
      <WinLoseDialog
        board={board}
        setBoard={setBoard}
        setWinPlayer={setWinPlayer}
        hasXWon={winPlayer === CONSTANTS.PLAYER_X}
        isOpen={Boolean(winPlayer)}
      />
    </Layout>
  );
};

export default BoardPage;
