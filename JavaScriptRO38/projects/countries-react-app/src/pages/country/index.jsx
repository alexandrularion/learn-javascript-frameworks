import Layout from "../../components/layout";
import Container from "./index.styled";
import { useLoaderData } from "react-router-dom";

const CountryPage = () => {
  const { country } = useLoaderData();
  console.log(country);
  return (
    <Layout>
      <Container></Container>
    </Layout>
  );
};

export default CountryPage;
