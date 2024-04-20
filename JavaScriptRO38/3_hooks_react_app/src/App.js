import Form from "./components/Form";
import WithState from "./components/WithState";
import WithoutState from "./components/WithoutState";

function App() {
  return (
    <div>
      <WithoutState />
      <WithState />
      <Form />
    </div>
  );
}

export default App;
