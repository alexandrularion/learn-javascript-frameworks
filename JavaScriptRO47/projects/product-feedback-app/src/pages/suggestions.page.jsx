import { SideBar, TopBar } from "../features/suggestions";
import ListSuggestions from "../features/suggestions/components/list-suggestions";
import styles from "./suggestions.module.css";

const SuggestionsPage = () => {
  return (
    <main className={styles["container"]}>
      <div className={styles["container__layout"]}>
        <SideBar />
        <div className={styles["container__content"]}>
          <TopBar />
          <ListSuggestions />
        </div>
      </div>
    </main>
  );
};

export default SuggestionsPage;
