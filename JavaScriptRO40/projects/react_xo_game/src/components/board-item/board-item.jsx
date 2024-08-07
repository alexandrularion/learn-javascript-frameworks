import React from "react";
import styles from "./board-item.module.css";
import XOutlineMark from "../../assets/x_outline.svg?react";
import OOutlineMark from "../../assets/o_outline.svg?react";
import CONSTANTS from "../../common/constants";

const BoardItem = (props) => {
  const [playerType, setPlayerType] = React.useState(CONSTANTS.PLAYER_X);
  const [isHover, setIsHover] = React.useState(false);

  const outlineMark =
    playerType === CONSTANTS.PLAYER_X ? <XOutlineMark /> : <OOutlineMark />;

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  React.useEffect(() => {
    const lsPlayerType = localStorage.getItem(
      CONSTANTS.LOCAL_STORAGE.PLAYER_TYPE
    );
    if (lsPlayerType) {
      setPlayerType(lsPlayerType);
    }
  }, []);

  return (
    <div
      className={styles["container"]}
      onClick={props.onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? outlineMark : null}
    </div>
  );
};

export default BoardItem;
