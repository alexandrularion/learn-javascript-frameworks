import styles from "./text.module.css";

const Text = (props) => {
  return <p className={styles["container"]}>{props.children}</p>;
};

export default Text;
