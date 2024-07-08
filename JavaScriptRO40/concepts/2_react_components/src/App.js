import Button from "./button";
import Form from "./form";

function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          gap: "30px",
        }}
      >
        Hello world!
        {/* Multiple instances of the same component */}
        <Button label="Click me!" type="submit" />
        <Button label="Hello world" type="reset" />
        {/* label, type, and variant will be passed down to the props object */}
        <Button label="My Custom Button" type="button" variant="fill" />
        <Button label="Save" />
        <Button label="Submit" />
        <Form />
      </div>
    </div>
  );
}

export default App;
