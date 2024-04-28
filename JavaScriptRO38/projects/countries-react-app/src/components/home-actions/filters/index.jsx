import Container from "./index.styled";
import PropTypes from "prop-types";

const Filters = ({ setFilter, filter }) => {
  const options = [
    {
      value: "africa",
      label: "Africa",
    },
    {
      value: "america",
      label: "America",
    },
    {
      value: "asia",
      label: "Asia",
    },
    {
      value: "europe",
      label: "Europe",
    },
    {
      value: "oceania",
      label: "Oceania",
    },
  ];

  const handleChange = (e) => {
    if (setFilter) {
      setFilter(e.target.value);
    }
  };

  return (
    <Container>
      <select name="filters" value={filter} onChange={handleChange}>
        <option value={""} disabled={true} selected={true}>
          Filter by Region
        </option>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

Filters.propTypes = {
  setFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default Filters;
