import { Link } from "react-router";

const HomePage = () => {
  // Tip: You can compose (insert/build) all the components related to home page below
  return (
    <>
      Home Page
      {/* Tip: Default variant to navigate through pages that never should be used */}
      <a href="/about">Go to about page</a>
      {/* Tip: Let us to navigate through pages without causing any refresh (page) */}
      <Link to="/about">Go to about page</Link>
    </>
  );
};

export default HomePage;
