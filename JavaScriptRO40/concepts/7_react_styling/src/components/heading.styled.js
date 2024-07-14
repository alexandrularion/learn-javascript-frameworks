import styled from "styled-components";

const Container = styled.h1`
  color: #000;
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "18px";
      case "md":
        return "24px";
      case "lg":
        return "30px";
      default:
        return "36px";
    }
  }};
`;

export default Container;
