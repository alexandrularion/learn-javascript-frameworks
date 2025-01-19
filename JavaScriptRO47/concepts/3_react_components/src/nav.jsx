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
      <Logo
        // Tip: The attributes below are sent to the props object within the Logo component
        logoUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmT92tuZnM7M65-c1zmdAX3PI5sbrhrk9lqA&s"
        }
        appName={"MyApp"}
        // Tip: The isHeadingVisible attribute will determine if the heading within Logo component is visible or not
        isHeadingVisible={true}
      />
      {/* Tip: We can use the same component multiple times as it is reusable with diferent props values */}
      <Logo
        // Tip: The attributes below are sent to the props object within the Logo component
        logoUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Kmtw8XWA4LvkZrOl8kVGKxLf1gkM1wg70g&s"
        }
        appName={"MySite.net"}
        // Tip: The isHeadingVisible attribute will determine if the heading within Logo component is visible or not
        isHeadingVisible={false}
      />

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
