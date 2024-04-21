import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import styles from "./index.module.css";

const ContactsPage = () => {
  return (
    <div className={styles["container"]}>
      <Navbar />
      <div className={styles["container__layout"]}>
        <Sidebar />
        <div className={styles["container__content"]}>
          <h2>No contact selected</h2>
          <p>Please select a contact to see more info.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
