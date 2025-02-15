import styles from "./side-bar.module.css";
import { Heading, Text } from "../../../common";
import React from "react";
import CategoryBadge from "./category-badge";

const SideBar = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [categories, setCategories] = React.useState([]);

  const getCategoriesFromApi = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5174/api/categories"); // (100ms)
      const data = await response.json(); // (50ms)
      setCategories(data);
    } catch (e) {
      console.log(
        `[API-ERROR]: Error when fetching the categories. Message: ${e.message}`
      );
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    // Tip: Will be called once (when the component is mounted)
    // Tip: Retrieve all the categories from the backend API
    getCategoriesFromApi();
    console.log("Fetch the categories");
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
            <CategoryBadge key={category.id}>{category.name}</CategoryBadge>
          ))
        ) : isLoading ? (
          <Text size="lg">Loading... </Text>
        ) : (
          <Text size="lg">No categories found.</Text>
        )}
      </div>
    </div>
  );
};

export default SideBar;
