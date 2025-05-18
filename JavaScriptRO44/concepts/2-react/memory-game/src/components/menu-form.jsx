import styles from "./menu-form.module.css";
import Button from "../common/button";
import Heading from "../common/heading";

const MenuForm = () => {
  return (
    <div className={styles["container"]}>
      <form className={styles["container__form"]}>
        <div className={styles["form__item"]}>
          <Heading as="h4">Select Theme</Heading>
          <div className={styles["item__options"]}>
            <div className={styles["options__radio"]}>
              <input type="radio" id="numbers" name="theme" value="numbers" />
              <div className={styles["radio__btn"]}>
                <label htmlFor="numbers">Numbers</label>
              </div>
            </div>
            <div className={styles["options__radio"]}>
              <input type="radio" id="icons" name="theme" value="icons" />
              <div className={styles["radio__btn"]}>
                <label htmlFor="icons">Icons</label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["form__item"]}>
          <Heading as="h4">Grid Size</Heading>
          <div className={styles["item__options"]}>
            <div className={styles["options__radio"]}>
              <input type="radio" id="4x4" name="grid" value="4x4" />
              <div className={styles["radio__btn"]}>
                <label htmlFor="4x4">4x4</label>
              </div>
            </div>
            <div className={styles["options__radio"]}>
              <input type="radio" id="6x6" name="grid" value="6x6" />
              <div className={styles["radio__btn"]}>
                <label htmlFor="6x6">6x6</label>
              </div>
            </div>
          </div>
        </div>
        <Button variant="primary" size="lg">
          Start game
        </Button>
      </form>
    </div>
  );
};

export default MenuForm;
