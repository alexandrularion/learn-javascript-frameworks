import styles from "./index.module.css";
import { Link, useLocation } from "react-router-dom";

const routes = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/contacts",
    label: "Contacts",
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={styles["container"]}>
      <div className={styles["container__links"]}>
        {routes.map((route) => (
          <Link
            to={route.url}
            className={
              route.url === location.pathname
                ? `${styles["links__label--active"]} ${styles["links__label"]}`
                : styles["links__label"]
            }
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
