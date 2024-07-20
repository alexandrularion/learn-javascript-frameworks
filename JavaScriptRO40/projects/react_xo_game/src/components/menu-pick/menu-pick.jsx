import Button from "../../common/button/button";
import Heading from "../../common/heading/heading";
import Text from "../../common/text/text";
import styles from "./menu-pick.module.css";
import XMark from "../../assets/x.svg?react";
import OMark from "../../assets/o.svg?react";

const MenuPick = () => {
  return (
    <div className={styles["container"]}>
      <Heading size={"xs"} color={"var(--text-color)"}>
        PICK PLAYER 1’S MARK
      </Heading>
      <div className={styles["pick-container"]}>
        <Button size={"md"} variant={"tertiary"}>
          <XMark className={styles["mark-unselected"]} />
        </Button>
        <Button size={"md"} variant={"quaternary"}>
          <OMark className={styles["mark-selected"]} />
        </Button>
      </div>
      <Text>REMEMBER: X GOES FIRST</Text>
    </div>
  );
};

export default MenuPick;
