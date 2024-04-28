import CountryDetails from "../../components/country-details";
import CountryHeader from "../../components/country-header";
import Layout from "../../components/layout";
import Container from "./index.styled";
import { useLoaderData } from "react-router-dom";

const CountryPage = () => {
  const { country } = useLoaderData();
  return (
    <Layout>
      <Container>
        <CountryHeader />
        <CountryDetails
          area={country.area}
          src={country.flags.png}
          name={country.name.common}
          officialName={country.name.official}
          population={country.population}
          region={country.region}
          subRegion={country.subregion}
          capital={country.capital?.[0]}
          tld={country.tld || []}
          currencies={Object.values(country.currencies) || []}
          languages={Object.values(country.languages) || []}
          border={country.borders || []}
        />
      </Container>
    </Layout>
  );
};

export default CountryPage;
