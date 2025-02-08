import { Button, Heading } from "../common";
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
      <Heading size="xl">Hello world</Heading>
      <Heading size="lg">Hello world</Heading>
      <Heading size="md">Hello world</Heading>
      <Heading size="sm">Hello world</Heading>
    </main>
  );
};

export default SuggestionsPage;
