import PropTypes from "prop-types";
import Container from "./index.styled";
import Search from "./search";
import Filters from "./filters";

const HomeActions = (props) => {
  return (
    <Container>
      <Search query={props.query} setQuery={props.setQuery} />
      <Filters filter={props.filter} setFilter={props.setFilter} />
    </Container>
  );
};

HomeActions.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,
  setFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default HomeActions;
