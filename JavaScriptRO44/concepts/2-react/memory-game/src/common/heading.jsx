import { useMemo } from "react";
import styles from "./heading.module.css";

const Heading = ({ children, as = "h1", ...restOfProps }) => {
  const element = useMemo(() => {
    const baseClassName = styles["container"];
    const sizeClassNames = {
      h1: styles["container--h1"],
      h2: styles["container--h2"],
      h3: styles["container--h3"],
      h4: styles["container--h4"],
      h5: styles["container--h5"],
    };
    const className = `${baseClassName} ${sizeClassNames[as]}`;

    const types = {
      h1: (
        <h1 className={className} {...restOfProps}>
          {children}
        </h1>
      ),
      h2: (
        <h2 className={className} {...restOfProps}>
          {children}
        </h2>
      ),
      h3: (
        <h3 className={className} {...restOfProps}>
          {children}
        </h3>
      ),
      h4: (
        <h4 className={className} {...restOfProps}>
          {children}
        </h4>
      ),
      h5: (
        <h5 className={className} {...restOfProps}>
          {children}
        </h5>
      ),
    };
    return types[as];
  }, [as, children, restOfProps]);

  return element;
};

export default Heading;
