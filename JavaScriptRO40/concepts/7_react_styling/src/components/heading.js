import Container from "./heading.styled";

const Heading = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Heading;
