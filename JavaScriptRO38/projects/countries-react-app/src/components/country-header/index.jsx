import Container from "./index.styled";
import ArrowBackIcon from "../../assets/arrow-back.svg?react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  path {
    fill: var(--text-color-2);
  }
`;

const CountryHeader = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/"); // Navigate to home page

  return (
    <Container>
      <button onClick={handleClick}>
        <StyledArrowBackIcon />
        Back
      </button>
    </Container>
  );
};

export default CountryHeader;
