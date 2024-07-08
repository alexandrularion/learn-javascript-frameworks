const Button = (props) => {
  console.log(props); // { label: "Click me!", type: "submit" }

  const { label, type, variant } = props; // object destructuring

  const fillStyle = { background: "#000", color: "#fff" };
  const outlineStyle = { background: "none", border: "2px solid #000" };

  // conditional ternary operator
  const style = variant === "fill" ? fillStyle : outlineStyle;

  // normal condition (equivalent to ternary operator above)
  //   let style;
  //   if (variant === "fill") {
  //     style = fillStyle;
  //   } else {
  //     style = outlineStyle;
  //   }

  return (
    <button type={type} style={style}>
      {/* Using {} you can insert JS into JSX */}
      {label}
    </button>
  );
};

export default Button;
