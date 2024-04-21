import Form from "./components/Form";
import Api from "./components/Api";
import WithState from "./components/WithState";
import WithoutState from "./components/WithoutState";

function App() {
  return (
    <div>
      <WithoutState />
      <WithState />
      <Form />
      <Api />
    </div>
  );
}

export default App;
