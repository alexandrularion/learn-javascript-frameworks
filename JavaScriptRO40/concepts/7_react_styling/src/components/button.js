import style from "./button.module.css";

const Button = (props) => {
  return <button className={style["container"]}>{props.children}</button>;
};

export default Button;
