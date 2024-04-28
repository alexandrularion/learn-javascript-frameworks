import Container from "./index.styled";
import SearchIcon from "../../../assets/search.svg?react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearchIcon = styled(SearchIcon)`
  path {
    fill: var(--text-color-2);
  }
`;

const Search = ({ setQuery, query }) => {
  const handleChange = (e) => {
    if (setQuery) {
      setQuery(e.target.value);
    }
  };

  return (
    <Container>
      <StyledSearchIcon />
      <input
        value={query}
        type="text"
        name="search"
        placeholder="Search for a country"
        onChange={handleChange}
      />
    </Container>
  );
};

Search.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,
};

export default Search;
