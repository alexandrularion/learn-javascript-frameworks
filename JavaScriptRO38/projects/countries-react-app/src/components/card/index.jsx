import PropTypes from "prop-types";
import Container from "./index.styled";

const Card = (props) => {
  return (
    <Container>
      <div className="card__flag">
        <img alt={"Flag"} src={props.src} />
      </div>
      <div className="card__content">
        <h2>{props.name}</h2>
        <div className="content__item">
          <span>Population:</span>
          <p>{props.population.toLocaleString("en")}</p>
        </div>
        <div className="content__item">
          <span> Region:</span>
          <p>{props.region}</p>
        </div>
        <div className="content__item">
          <span> Capital:</span>
          <p>{props.capital}</p>
        </div>
      </div>
    </Container>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default Card;
