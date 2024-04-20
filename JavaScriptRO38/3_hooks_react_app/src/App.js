import WithState from "./components/WithState";
import WithoutState from "./components/WithoutState";

function App() {
  return (
    <div>
      <WithoutState />
      <WithState />
    </div>
  );
}

export default App;
