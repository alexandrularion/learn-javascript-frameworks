import styles from "./button.module.css";

// NOTE: Use rest operator to extract the rest of the properties within props object
const Button = ({
  children,
  size = "md",
  variant = "primary",
  ...restOfProps
}) => {
  // NOTE: Before return we can write any logic (states, refs, functions, variables)
  const generateClassName = (size, variant) => {
    const baseClassName = styles["container"];
    const sizeClassNames = {
      lg: styles["container--lg"],
      md: styles["container--md"],
    };
    const variantClassNames = {
      primary: styles["container--primary"],
      secondary: styles["container--secondary"],
    };
    // NOTE: With backticks `` we can do string interpolation (concatenation)
    return `${baseClassName} ${sizeClassNames[size]} ${variantClassNames[variant]}`;
  };

  // NOTE: Children helps us to send any child within our component
  return (
    // NOTE: Other properties than children, size or variant are passed as attributes to our btn
    <button className={generateClassName(size, variant)} {...restOfProps}>
      {children}
    </button>
  );
};

export default Button;
