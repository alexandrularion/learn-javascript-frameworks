import styles from "./index.module.css";
import { useLoaderData } from "react-router-dom";

const Sidebar = () => {
  const { contacts } = useLoaderData();
  console.log(contacts); // [{}]
  return <div className={styles["container"]}></div>;
};

export default Sidebar;
