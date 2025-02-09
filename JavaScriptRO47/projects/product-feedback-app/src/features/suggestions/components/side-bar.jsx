import styles from "./side-bar.module.css";
import { Heading, Text } from "../../../common";
import React from "react";

const SideBar = () => {
  const [categories, setCategories] = React.useState([]);

  const getCategoriesFromApi = async () => {
    try {
      const response = await fetch("http://localhost:5174/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch (e) {
      console.log(
        `[API-ERROR]: Error when fetching the categories. Message: ${e.message}`
      );
    }
  };

  React.useEffect(() => {
    // Tip: Will be called once (when the component is mounted)
    // Tip: Retrieve all the categories from the backend API
    getCategoriesFromApi();
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["container__gradient"]}>
        <Heading size="lg">Product Feedback</Heading>
        <Text size="md">Feedback Board</Text>
      </div>
      <div className={styles["container__categories"]}>
        {categories && categories.length ? (
          categories.map((category) => (
            <p key={category.id} style={{ color: "red" }}>
              {category.name}
            </p>
          ))
        ) : (
          <Text>Not categories found.</Text>
        )}
      </div>
    </div>
  );
};

export default SideBar;
