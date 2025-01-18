// Tip: Props is way to send data from a parent to a child component
// Tip: Props is always an object with all the properties given to the component
const Logo = (props) => {
  // Tip: Always the returned jsx should have a common parent
  return (
    <div>
      <img src={props.logoUrl} />
      <h1>{props.appName}</h1>
    </div>
  );
};

export default Logo;
