import Logo from "./logo";
import Button from "./button";

const Navigation = () => {
  const user = {
    name: "Dorel Constructorul",
    role: "Inginer",
    age: 58,
  };

  // Tip: The returned code is a jsx syntax
  // Tip: Combines HTML-like syntax with JavaScript logic
  // Tip: Enable dynamic content using curly braces {}, e.g. {myVariable}
  return (
    <div>
      {/* Tip: Custom component, always starting with a upper case letter */}
      <Logo />

      {/* Tip: style the tag with "style" attribute */}
      {/* Tip: e.g. in HTML -> <div style="display:flex; flex-direction:column; gap: 5px;"></div> */}
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {/*Tip: dynamic content */}
        <h2>{user.name}</h2>
        <p>{user.role}</p>
      </div>

      {/* Tip: Custom component, always starting with a upper case letter */}
      <Button />
    </div>
  );
};

export default Navigation;
