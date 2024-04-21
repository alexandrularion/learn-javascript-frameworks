import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import styles from "./index.module.css";

const ContactsPage = () => {
  return (
    <div className={styles["container"]}>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default ContactsPage;
