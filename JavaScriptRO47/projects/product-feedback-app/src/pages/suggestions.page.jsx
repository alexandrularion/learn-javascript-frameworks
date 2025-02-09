import { SideBar, TopBar } from "../features/suggestions";
import styles from "./suggestions.module.css";

const SuggestionsPage = () => {
  return (
    <main className={styles["container"]}>
      <div className={styles["container__layout"]}>
        <SideBar />
        <TopBar />
      </div>
    </main>
  );
};

export default SuggestionsPage;
