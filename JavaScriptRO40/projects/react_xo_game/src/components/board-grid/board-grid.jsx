import BoardItem from "../board-item/board-item";
import styles from "./board-grid.module.css";

const BoardGrid = () => {
  const gridItems = [
    {
      id: "8639f223-d1e5-4ca8-95c5-7cdf73acc33e",
      index: 0,
    },
    {
      id: "18ca9928-69de-4690-ac19-ea44a802bb04",
      index: 1,
    },
    {
      id: "642750b3-6708-44cf-bae8-4846980acd11",
      index: 2,
    },
    {
      id: "3664a17d-d2b7-4a12-839b-ec99ec2e6347",
      index: 3,
    },
    {
      id: "0e7fbd3b-2a4e-4c27-a570-e8b3e174cde1",
      index: 4,
    },
    {
      id: "8c6924d1-c800-4c50-80f8-9451e4a30253",
      index: 5,
    },
    {
      id: "441a1074-46d2-4a17-a827-4b0b25304b02",
      index: 6,
    },
    {
      id: "3ebfa318-db80-4ffe-a71e-c392e5b661e0",
      index: 7,
    },
    {
      id: "92c0a04a-6895-4023-94dc-e92ef0084190",
      index: 8,
    },
  ];

  return (
    <div className={styles["container"]}>
      {gridItems.map((item) => (
        <BoardItem
          key={item.id}
          index={item.index}
          onClick={() => {
            console.log("item", item.index);
          }}
        />
      ))}
    </div>
  );
};

export default BoardGrid;
