import Container from "./index.styled";
import Navigation from "../navigation";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <main>{children}</main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
