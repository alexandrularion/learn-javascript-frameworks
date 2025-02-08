import styles from "./text.module.css";

const Text = (props) => {
  const getClassName = (baseClassName, size) => {
    switch (size) {
      case "lg":
        return `${baseClassName} ${styles["container--lg"]}`;
      case "md":
        return `${baseClassName} ${styles["container--md"]}`;
      case "sm":
        return `${baseClassName} ${styles["container--sm"]}`;
    }
  };

  return (
    <p className={getClassName(styles["container"], props.size)}>
      {props.children}
    </p>
  );
};

export default Text;
