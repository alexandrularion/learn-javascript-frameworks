import Container from "./index.styled";
import PropTypes from "prop-types";

const CountryDetails = (props) => {
  return (
    <Container>
      <div className="card__flag">
        <img alt={"Flag"} src={props.src} />
      </div>
      <div className="card__layout">
        <h2>{props.officialName}</h2>
        <div className={"layout__content"}>
          <div className="content__item">
            <span> Navtive Name:</span>
            <p>{props.name}</p>
          </div>
          <div className="content__item">
            <span> Population:</span>
            <p>{props.population}</p>
          </div>
          <div className="content__item">
            <span> Region:</span>
            <p>{props.region}</p>
          </div>
          <div className="content__item">
            <span> Sub Region:</span>
            <p>{props.subRegion}</p>
          </div>
          <div className="content__item">
            <span> Capital:</span>
            <p>{props.capital || "None"}</p>
          </div>
          <div className="content__item">
            <span> Top Level Domain:</span>
            {props.tld.length
              ? props.tld.map((domain, key) => (
                  <p key={key}>
                    {domain} {key > 0 ? ", " : ""}
                  </p>
                ))
              : "None"}
          </div>
          <div className="content__item">
            <span> Currencies:</span>
            {props.languages.length
              ? props.currencies.map(({ name, symbol }, key) => (
                  <p key={key}>
                    {name} - {symbol}
                    {key > 0 ? ", " : ""}
                  </p>
                ))
              : "None"}
          </div>
          <div className="content__item">
            <span> Languages:</span>
            {props.languages.length
              ? props.languages.slice(0, 5).map((domain, key) => (
                  <p key={key}>
                    {domain}
                    {key > 0 ? "," : ""}
                  </p>
                ))
              : "None"}
          </div>
        </div>
        <div className="layout__borders">
          <span> Borders:</span>
          {props.border.length
            ? props.border.map((domain, key) => <p key={key}>{domain}</p>)
            : "None"}
        </div>
      </div>
    </Container>
  );
};

CountryDetails.propTypes = {
  area: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  officialName: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  subRegion: PropTypes.string.isRequired,
  tld: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  border: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CountryDetails;
