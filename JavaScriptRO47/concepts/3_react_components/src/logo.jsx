// Tip: Props is way to send data from a parent to a child component
// Tip: Props is always an object with all the properties given to the component
const Logo = (props) => {
  // Tip: Always the returned jsx should have a common parent
  return (
    <div>
      <img src={props.logoUrl} />
      {/* Tip: The heading is rendered conditionally based on a condition */}
      {/* Tip: Syntax: condition ? value1 : value2 */}
      {props.isHeadingVisible ? <h1>{props.appName}</h1> : null}
    </div>
  );
};

export default Logo;
