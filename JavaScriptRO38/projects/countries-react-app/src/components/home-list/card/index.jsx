import PropTypes from "prop-types";
import Container from "./index.styled";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/country/${props.name}`}>
      <Container>
        <div className="card__flag">
          <img alt={"Flag"} src={props.src} />
        </div>
        <div className="card__content">
          <h2>{props.name}</h2>
          <div className="content__item">
            <span>Population:</span>
            <p>{Number(props.population).toLocaleString("en")}</p>
          </div>
          <div className="content__item">
            <span> Region:</span>
            <p>{props.region}</p>
          </div>
          <div className="content__item">
            <span> Capital:</span>
            <p>{props.capital || "None"}</p>
          </div>
        </div>
      </Container>
    </Link>
  );
};

Card.propTypes = {
  area: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default Card;
