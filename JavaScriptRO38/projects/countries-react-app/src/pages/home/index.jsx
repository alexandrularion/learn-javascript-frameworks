import Layout from "../../components/layout";
import Container from "./index.styled";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../api";
import HomeList from "../../components/home-list";
import HomeActions from "../../components/home-actions";

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
        <HomeActions
          query={query}
          filter={filter}
          setFilter={setFilter}
          setQuery={setQuery}
        />
        <HomeList countries={allCountries} />
      </Container>
    </Layout>
  );
};

export default HomePage;
