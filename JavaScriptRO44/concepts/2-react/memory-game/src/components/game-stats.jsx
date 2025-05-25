import styles from "./game-stats.module.css";
import Heading from "../common/heading";
import React from "react";

const GameStats = (props) => {
  // NOTE: Format the date to contain only minutes and seconds
  const formatedDate = props.date.toLocaleTimeString(undefined, {
    minute: "2-digit",
    second: "2-digit",
  });

  const handleTime = React.useCallback(() => {
    // NOTE: We create a new date (becase otherwise it will point to the same date reference)
    const newDate = new Date(props.date.getTime());

    // NOTE: We increment seconds (the method will automatically increment the minutes if needed)
    newDate.setSeconds(newDate.getSeconds() + 1);

    // NOTE: We save the new date locally and also in parent page state
    props.setDate(newDate);
  }, [props]);

  React.useEffect(() => {
    // NOTE: We call the handleTime fn from second to second
    const interval = setInterval(handleTime, 1000);

    // NOTE: We clean up the interval
    return () => clearInterval(interval);
  }, [handleTime]);

  return (
    <div className={styles["container"]}>
      <div className={styles["container__card"]}>
        <Heading as="h5">Time</Heading>
        <Heading as="h3">{formatedDate}</Heading>
      </div>
      <div className={styles["container__card"]}>
        <Heading as="h5">Moves</Heading>
        <Heading as="h3">{props.moves}</Heading>
      </div>
    </div>
  );
};

export default GameStats;
