import PropTypes from "prop-types";
import Container from "./index.styled";
import Card from "./card";

const HomeList = (props) => {
  return (
    <Container>
      {props.countries.map((country) => (
        <Card
          key={country.area}
          area={country.area}
          src={country.flags.png}
          name={country.name.official}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
        />
      ))}
    </Container>
  );
};

HomeList.propTypes = {
  countries: PropTypes.array,
};

export default HomeList;
