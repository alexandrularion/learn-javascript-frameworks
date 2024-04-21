import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Card = (props) => {
  const location = useLocation();
  const pathname = `/contacts/${props.id}`;
  return (
    <Link to={pathname}>
      <div
        className={
          location.pathname === pathname
            ? `${styles["container"]} ${styles["container--active"]}`
            : styles["container"]
        }
      >
        <img
          src={props.avatar}
          alt={"Avatar"}
          className={styles["container__avatar"]}
        />
        <div className={styles["container__content"]}>
          <h3>{`${props.firstName} ${props.lastName}`}</h3>
          <p>{props.email}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
