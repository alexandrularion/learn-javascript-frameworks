import Layout from "../../components/layout";
import Container from "./index.styled";
import Search from "../../components/search";
import Filters from "../../components/filters";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import Api from "../../api";

const HomePage = () => {
  const { countries } = useLoaderData();
  const [allCountries, setAllCountries] = useState(countries);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (countries && countries.length) {
      setAllCountries(countries);
    }
  }, [countries]);

  useEffect(() => {
    if (typeof query === "string" && query) {
      const handleFetch = async () => {
        const data = await Api.getCountriesByName(query);
        setAllCountries(data);
      };
      handleFetch();
    } else {
      setAllCountries(countries);
    }
  }, [query, countries]);

  useEffect(() => {
    if (typeof filter === "string" && filter) {
      const handleFetch = async () => {
        const data = await Api.getCountriesByRegion(filter);
        setAllCountries(data);
      };
      handleFetch();
    } else {
      setAllCountries(countries);
    }
  }, [filter, countries]);

  return (
    <Layout>
      <Container>
        <div className="home__actions">
          <Search query={query} setQuery={setQuery} />
          <Filters filter={filter} setFilter={setFilter} />
        </div>
        <div className="home__cards">
          {allCountries.map((country) => (
            <Card
              key={country.area}
              area={country.area}
              src={country.flags.png}
              name={country.name.official}
              population={country.population}
              region={country.region}
              capital={country.capital?.length ? country.capital[0] : "None"}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default HomePage;
