import styles from "./index.module.css";
import { useLoaderData } from "react-router-dom";
import Card from "./card";

const Sidebar = () => {
  const { contacts } = useLoaderData();
  console.log(contacts); // [....] all the contacts passed by the loader in App.js
  return (
    <div className={styles["container"]}>
      <div className={styles["container__search"]}>
        <h2>Search</h2>
        <input type="text" name="search" placeholder="i.e. John Doe" />
      </div>
      <div className={styles["container__cards"]}>
        {contacts && contacts.length ? (
          contacts.map((contact) => (
            <Card
              email={contact.email}
              firstName={contact.firstName}
              lastName={contact.lastName}
              avatar={contact.avatar}
            />
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
