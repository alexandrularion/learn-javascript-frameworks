import styles from "./top-bar.module.css";
import BulbIcon from "../../../assets/bulb.svg?react";
import { Heading, Button } from "../../../common";
import React from "react";

const TopBar = () => {
  const [suggestionsLength, setSuggestionsLength] = React.useState(0);
  const suggestionsLabel = `${suggestionsLength} Suggestions`;

  const getSuggestionsCountFromApi = async () => {
    try {
      const response = await fetch(
        "http://localhost:5174/api/suggestions/count"
      );
      const data = await response.json();
      setSuggestionsLength(data);
    } catch (e) {
      console.log(
        `[API-ERROR]: Error when fetching the suggestions count. Message: ${e.message}`
      );
    }
  };

  React.useEffect(() => {
    getSuggestionsCountFromApi();
  }, []);

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
