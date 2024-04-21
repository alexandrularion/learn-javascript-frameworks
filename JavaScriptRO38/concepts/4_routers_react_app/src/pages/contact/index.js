import Navbar from "../../components/navbar";
import Profile from "../../components/profile";
import Sidebar from "../../components/sidebar";
import styles from "./index.module.css";
import { useLoaderData } from "react-router-dom";

const ContactPage = () => {
  const { contact } = useLoaderData();
  return (
    <div className={styles["container"]}>
      <Navbar />
      <div className={styles["container__layout"]}>
        <Sidebar />
        <div className={styles["container__content"]}>
          <Profile
            id={contact.id}
            email={contact.email}
            firstName={contact.firstName}
            lastName={contact.lastName}
            avatar={contact.avatar}
            phoneNumber={contact.phoneNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
