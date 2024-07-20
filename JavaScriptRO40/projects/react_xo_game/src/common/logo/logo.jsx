import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles["container"]}>
      <img src="/logo.svg" alt="XO Game - Logo" />
    </div>
  );
};

export default Logo;
