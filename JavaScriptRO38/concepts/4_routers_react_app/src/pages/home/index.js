import Navbar from "../../components/navbar";
import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div className={styles["container"]}>
      <Navbar />
      This is the Home page
    </div>
  );
};

export default HomePage;
