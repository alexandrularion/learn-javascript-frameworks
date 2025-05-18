import styles from "./start.module.css";
import MenuForm from "../components/menu-form";
import Heading from "../common/heading";

const StartPage = () => {
  return (
    <div className={styles["container"]}>
      <Heading
        as="h2"
        style={{
          color: "var(--color-secondary-50)",
        }}
      >
        memory
      </Heading>
      <MenuForm />
    </div>
  );
};

export default StartPage;
