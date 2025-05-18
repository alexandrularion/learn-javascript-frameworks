import styles from "./start.module.css";
import Button from "../common/button";

const StartPage = () => {
  return (
    <div className={styles["container"]}>
      <p>Start page</p>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button size="lg">Large</Button>
      <Button size="md">Medium</Button>
    </div>
  );
};

export default StartPage;
