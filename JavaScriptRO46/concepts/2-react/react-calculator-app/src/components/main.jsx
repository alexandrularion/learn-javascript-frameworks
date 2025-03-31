import styles from "./main.module.css";
import Button from "./button";
import Heading from "./heading";

const Main = () => {
  return (
    <main className={styles["container"]}>
      {/* Tip: Composition is a design pattern that allows us to combine custom components
      with regular html-code like
    */}
      <header className={styles["container__header"]}>
        <Heading size="sm">Calculator</Heading>
      </header>
      <section className={styles["container__playground"]}>
        <div className={styles["playground__amount"]}>
          <Heading size="md">1920</Heading>
        </div>
        <div className={styles["playground__buttons"]}></div>
      </section>
    </main>
  );
};

export default Main;
