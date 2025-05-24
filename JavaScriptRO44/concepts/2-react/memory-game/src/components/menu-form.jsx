import styles from "./menu-form.module.css";
import Button from "../common/button";
import Heading from "../common/heading";
import { useNavigate } from "react-router";

const MenuForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // NOTE: Prevents browser to refresh
    event.preventDefault();

    // NOTE: Create an object to store form values
    const values = {
      theme: event.target.theme.value,
      grid: event.target.grid.value,
    };

    // NOTE: Save the configuration in session storage
    const jsonValues = JSON.stringify(values);
    sessionStorage.setItem("memory.config", jsonValues);

    // NOTE: Redirect the user to the game page
    navigate("/game");
  };

  return (
    <div className={styles["container"]}>
      <form className={styles["container__form"]} onSubmit={handleSubmit}>
        <div className={styles["form__item"]}>
          <Heading as="h4">Select Theme</Heading>
          <div className={styles["item__options"]}>
            <div className={styles["options__radio"]}>
              <input
                type="radio"
                id="numbers"
                name="theme"
                value="numbers"
                required
              />
              <div className={styles["radio__btn"]}>
                <label htmlFor="numbers">Numbers</label>
              </div>
            </div>
            <div className={styles["options__radio"]}>
              <input
                type="radio"
                id="icons"
                name="theme"
                value="icons"
                required
              />
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
              <input type="radio" id="4x4" name="grid" value="4x4" required />
              <div className={styles["radio__btn"]}>
                <label htmlFor="4x4">4x4</label>
              </div>
            </div>
            <div className={styles["options__radio"]}>
              <input type="radio" id="6x6" name="grid" value="6x6" required />
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
