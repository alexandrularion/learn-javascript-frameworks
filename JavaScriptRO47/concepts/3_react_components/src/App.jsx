import Navigation from "./nav";
import Footer from "./footer";

function App() {
  // Tip: Combining multiple components we can create a page, layout etc (composition)
  return (
    <div>
      {/* Tip: The order of the components/tags matter like in HTML */}
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
