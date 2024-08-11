import BoardMetric from "../board-metric/board-metric";
import styles from "./board-footer.module.css";

const BoardFooter = () => {
  return (
    <div className={styles["container"]}>
      <BoardMetric
        background="var(--app-color-1)"
        text="X (CPU)"
        heading={10}
      />
      <BoardMetric
        background="var(--background-color-3)"
        text="TIES"
        heading={3}
      />
      <BoardMetric
        background="var(--app-color-3)"
        text="O (YOU)"
        heading={20}
      />
    </div>
  );
};

export default BoardFooter;
