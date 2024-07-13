import Message from "./components/message";
import Product from "./components/product";
import UserProfile from "./components/user-profile";
import UserSettings from "./components/user-settings";

function App() {
  return (
    <div>
      <Message />
      <UserProfile
        name="Ion Popescu"
        email="ion.popescu@gmail.com"
        username="ion.popescu"
      />
      <UserSettings />
      <Product />
    </div>
  );
}

export default App;
