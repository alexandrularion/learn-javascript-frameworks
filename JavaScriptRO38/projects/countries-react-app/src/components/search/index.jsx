import Container from "./index.styled";
import SearchIcon from "../../assets/search.svg?react";
import styled from "styled-components";

const StyledSearchIcon = styled(SearchIcon)`
  path {
    fill: var(--text-color-2);
  }
`;

const Search = () => {
  return (
    <Container>
      <StyledSearchIcon />
      <input type="text" name="search" placeholder="Search for a country" />
    </Container>
  );
};

export default Search;
