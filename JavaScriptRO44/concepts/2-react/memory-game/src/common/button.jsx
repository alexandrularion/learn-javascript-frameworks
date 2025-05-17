import styles from "./button.module.css";

const Button = (props) => {
  // NOTE: Before return we can write any logic (states, refs, functions, variables)
  const generateClassName = (size, variant) => {
    const baseClassName = styles["container"];
    const sizeClassNames = {
      lg: styles["container--lg"],
      md: styles["container--md"],
      sm: styles["container--sm"],
    };
    const variantClassNames = {
      primary: styles["container--primary"],
      secondary: styles["container--secondary"],
      tertiary: styles["container--tertiary"],
    };
    // NOTE: With backticks `` we can do string interpolation (concatenation)
    return `${baseClassName} ${sizeClassNames[size]} ${variantClassNames[variant]}`;
  };

  // NOTE: Children helps us to send any child within our component
  return (
    <button className={generateClassName(props.size, props.variant)} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
