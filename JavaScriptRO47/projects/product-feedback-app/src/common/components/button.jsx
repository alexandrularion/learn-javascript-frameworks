import styles from "./button.module.css";

const Button = (props) => {
  // Tip: Props is an object always!!!!!!!
  // Tip: You can use "children" property to access the child given to our component

  const getClassName = (baseClassName, variant) => {
    switch (variant) {
      case "primary":
        return `${baseClassName} ${styles["container--primary"]}`; // i.e. generated class: _container--primary_23lsdl23
      case "secondary":
        return `${baseClassName} ${styles["container--secondary"]}`;
      case "tertiary":
        return `${baseClassName} ${styles["container--tertiary"]}`;
      case "quaternary":
        return `${baseClassName} ${styles["container--quaternary"]}`;
      case "quinary":
        return `${baseClassName} ${styles["container--quinary"]}`;
    }
  };

  return (
    <button className={getClassName(styles["container"], props.variant)}>
      {props.children}
    </button>
  );
};

export default Button;
