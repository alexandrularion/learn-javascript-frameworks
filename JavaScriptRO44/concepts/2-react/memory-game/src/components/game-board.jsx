import styles from "./game-board.module.css";

const GameBoard = (props) => {
  const containerClassName = `${styles["container"]} ${
    styles[props.grid === "4x4" ? "container--4x4" : "container--6x6"]
  }`;

  return (
    <div className={containerClassName}>
      {props.items.map((item, index) => {
        const baseClassName = styles["container__item"];
        // NOTE: We choose the right style based on status
        // NOTE: We use ternary operator to decide which class is used
        const classNameByStatus =
          item.status === "hidden"
            ? styles["container__item--hidden"]
            : item.status === "revealed"
            ? styles["container__item--revealed"]
            : styles["container__item--just-revealed"];
        // NOTE: We choose the right style based on grid size
        const classNameByGrid =
          props.grid === "4x4"
            ? styles["container__item--4x4"]
            : styles["container__item--6x6"];

        return (
          <div
            key={index}
            // NOTE: We concatenate the string using `` backticks symbols (string interpolation)
            className={`${baseClassName} ${classNameByStatus} ${classNameByGrid}`}
          >
            {item.status === "hidden" ? null : item.value}
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
