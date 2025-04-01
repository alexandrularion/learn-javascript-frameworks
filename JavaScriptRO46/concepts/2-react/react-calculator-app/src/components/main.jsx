import styles from "./main.module.css";
import Button from "./button";
import Heading from "./heading";
import React from "react";

const Main = () => {
  // Tip: State is data stored inside our component that can be changed over time
  const [output, setOutput] = React.useState("0"); // Tip: The value returned [getter, setter]

  const buttons = [
    // Row 1
    { name: "C", variant: "secondary", gridArea: "a1" },
    { name: "±", variant: "secondary", gridArea: "a2" },
    { name: "%", variant: "secondary", gridArea: "a3" },
    { name: "÷", variant: "primary", gridArea: "a4" },

    // Row 2
    { name: "7", variant: "secondary", gridArea: "b1" },
    { name: "8", variant: "secondary", gridArea: "b2" },
    { name: "9", variant: "secondary", gridArea: "b3" },
    { name: "×", variant: "primary", gridArea: "b4" },

    // Row 3
    { name: "4", variant: "secondary", gridArea: "c1" },
    { name: "5", variant: "secondary", gridArea: "c2" },
    { name: "6", variant: "secondary", gridArea: "c3" },
    { name: "−", variant: "primary", gridArea: "c4" },

    // Row 4
    { name: "1", variant: "secondary", gridArea: "d1" },
    { name: "2", variant: "secondary", gridArea: "d2" },
    { name: "3", variant: "secondary", gridArea: "d3" },
    { name: "+", variant: "primary", gridArea: "d4" },

    // Row 5
    { name: "0", variant: "tertiary", gridArea: "e1" },
    { name: ".", variant: "secondary", gridArea: "e2" },
    { name: "=", variant: "primary", gridArea: "e3" },
  ];

  return (
    <main className={styles["container"]}>
      {/* Tip: Composition is a design pattern that allows us to combine custom components
      with regular html-code like
    */}
      <header className={styles["container__header"]}>
        <Heading size="sm">Calculator</Heading>
      </header>
      <section className={styles["container__playground"]}>
        <div className={styles["playground__amount"]}>
          <Heading size="md">{output}</Heading>
        </div>
        <div className={styles["playground__buttons"]}>
          {/* Tip: The lists help us to render multiple elements that have the same structure */}
          {/* Tip: .map method is used to generate our list */}
          {buttons.map((button, index) => {
            return (
              <Button
                // Tip: Each element should have an unique key
                // Tip: The key is needed by react to identify each element when doing re-renders
                key={`${index}-${button.gridArea}`}
                variant={button.variant}
                style={{ gridArea: button.gridArea }}
              >
                {button.name}
              </Button>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
