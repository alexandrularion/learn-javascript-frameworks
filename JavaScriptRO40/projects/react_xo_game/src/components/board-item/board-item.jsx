import React from "react";
import styles from "./board-item.module.css";
import XOutlineMark from "../../assets/x_outline.svg?react";
import OOutlineMark from "../../assets/o_outline.svg?react";

const BoardItem = (props) => {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={styles["container"]}
      onClick={props.onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? <XOutlineMark /> : null}
    </div>
  );
};

export default BoardItem;
