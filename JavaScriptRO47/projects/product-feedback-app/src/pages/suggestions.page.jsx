import { Button } from "../common";
import styles from "./suggestions.module.css";

const SuggestionsPage = () => {
  return (
    <main className={styles["container"]}>
      Suggestions page
      <Button variant="primary">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="tertiary">Click me</Button>
      <Button variant="quaternary">Click me</Button>
      <Button variant="quinary">Click me</Button>
    </main>
  );
};

export default SuggestionsPage;
