import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const user = {
    name: "SDA",
    surName: "Frontend",
    email: "frontend@yahoo.com",
    bio: `Cel mai tare curs.`,
    isAdmin: true,
    isGuest: true,
  };
  return (
    <div className="App">
      <Header />
      <Profile user={user} />
      <Footer />
    </div>
  );
}

export default App;
