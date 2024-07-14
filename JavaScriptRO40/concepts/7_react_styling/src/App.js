import Button from "./components/button";
import Heading from "./components/heading";
import Input from "./components/input";

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Input placeholder="Enter some text" />
      <Heading size="sm">Custom heading with styled components</Heading>
    </div>
  );
}

export default App;
