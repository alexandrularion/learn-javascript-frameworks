import styles from "./top-bar.module.css";
import BulbIcon from "../../../assets/bulb.svg?react";
import { Heading, Button } from "../../../common";

const TopBar = () => {
  const nrOfSuggestions = 10; // Tip: We get it from the suggestions array
  const suggestionsLabel = `${nrOfSuggestions} Suggestions`;

  return (
    <div className={styles["container"]}>
      <div className={styles["container__info"]}>
        <BulbIcon />
        <Heading size="md">{suggestionsLabel}</Heading>
      </div>
      <Button variant="primary"> + Add Feedback</Button>
    </div>
  );
};

export default TopBar;
