import styles from "./index.module.css";

const Card = (props) => {
  return (
    <div className={styles["container"]}>
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
  );
};

export default Card;
