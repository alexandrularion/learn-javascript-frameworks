import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./components/button";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    Hello world
    {/* Tip: To see the button we need to do an instance for the Button */}
    <Button variant="primary">3</Button>
    <Button variant="tertiary">X</Button>
    <Button variant="secondary">=</Button>
  </StrictMode>
);
