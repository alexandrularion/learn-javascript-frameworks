import styles from "./category-badge.module.css";

const CategoryBadge = (props) => {
  return <div className={styles["container"]}>{props.children}</div>;
};

export default CategoryBadge;
