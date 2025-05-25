import useConfig from "../hooks/use-config";
import styles from "./game-board.module.css";

const GameBoard = (props) => {
  const config = useConfig();

  const containerClassName = `${styles["container"]} ${
    styles[config.grid === "4x4" ? "container--4x4" : "container--6x6"]
  }`;

  const handleClick = (item) => {
    props.setItems((items) =>
      items.map((currentItem) => {
        if (currentItem.id === item.id) {
          props.setPair([...props.pair, currentItem]);
          return {
            ...currentItem,
            status: "just-revealed",
          };
        }
        return currentItem;
      })
    );
  };

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
          config.grid === "4x4"
            ? styles["container__item--4x4"]
            : styles["container__item--6x6"];

        return (
          <div
            key={index}
            // NOTE: We concatenate the string using `` backticks symbols (string interpolation)
            className={`${baseClassName} ${classNameByStatus} ${classNameByGrid}`}
            onClick={() => handleClick(item)}
          >
            {item.status === "hidden" ? null : item.value}
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
