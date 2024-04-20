import Form from "./components/Form";
import WithEffect from "./components/WithEffect";
import WithState from "./components/WithState";
import WithoutState from "./components/WithoutState";

function App() {
  return (
    <div>
      <WithoutState />
      <WithState />
      <Form />
      <WithEffect />
    </div>
  );
}

export default App;
