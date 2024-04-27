import "./App.css";
import Filters from "./components/filters";
import Navigation from "./components/navigation";
import Search from "./components/search";

function App() {
  return (
    <>
      <Navigation />
      <Search />
      <Filters />
    </>
  );
}

export default App;
