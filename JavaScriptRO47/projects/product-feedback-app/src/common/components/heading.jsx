import styles from "./heading.module.css";

const Heading = (props) => {
  const getClassName = (baseClassName, size) => {
    switch (size) {
      case "xl":
        return `${baseClassName} ${styles["container--xl"]}`;
      case "lg":
        return `${baseClassName} ${styles["container--lg"]}`;
      case "md":
        return `${baseClassName} ${styles["container--md"]}`;
      case "sm":
        return `${baseClassName} ${styles["container--sm"]}`;
    }
  };

  return (
    <h1 className={getClassName(styles["container"], props.size)}>
      {props.children}
    </h1>
  );
};

export default Heading;
