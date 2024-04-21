import styles from "./index.module.css";
import { useLoaderData } from "react-router-dom";
import Card from "./card";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { contacts } = useLoaderData();
  console.log(contacts); // [....] all the contacts passed by the loader in App.js

  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    const newContacts = contacts.filter(({ firstName, lastName }) =>
      [firstName.toLowerCase(), lastName.toLowerCase()].includes(
        search.toLowerCase()
      )
    );
    console.log(newContacts, contacts, search);
    setFilteredContacts(newContacts);
  }, [search, contacts]);

  useEffect(() => {
    if (filteredContacts.length === 0) {
      setFilteredContacts(contacts);
    }
  }, [contacts, filteredContacts]);

  return (
    <div className={styles["container"]}>
      <div className={styles["container__search"]}>
        <h2>Search</h2>
        <input
          type="text"
          name="search"
          placeholder="i.e. John Doe"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className={styles["container__cards"]}>
        {filteredContacts && filteredContacts.length ? (
          filteredContacts.map((contact) => (
            <Card
              id={contact.id}
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
