import Button from "../../common/button/button";
import Logo from "../../common/logo/logo";
import MenuPick from "../menu-pick/menu-pick";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles["container"]}>
      <Logo />
      <MenuPick />
      <Button variant={"secondary"}>NEW GAME (VS CPU)</Button>
    </div>
  );
};

export default Menu;
