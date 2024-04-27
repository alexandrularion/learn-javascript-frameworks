import "./App.css";
import Filters from "./components/filters";
import Navigation from "./components/navigation";
import Search from "./components/search";
import Card from "./components/card";

function App() {
  return (
    <>
      <Navigation />
      <Search />
      <Filters />
      <Card
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        name="Afghanistan"
        population={40218234}
        region={"Asia"}
        capital={"Kabul"}
      />
    </>
  );
}

export default App;
