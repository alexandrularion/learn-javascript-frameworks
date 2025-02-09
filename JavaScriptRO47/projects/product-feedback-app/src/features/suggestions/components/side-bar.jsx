import styles from "./side-bar.module.css";
import { Heading, Text } from "../../../common";

const SideBar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__gradient"]}>
        <Heading size="lg">Product Feedback</Heading>
        <Text size="md">Feedback Board</Text>
      </div>
    </div>
  );
};

export default SideBar;
