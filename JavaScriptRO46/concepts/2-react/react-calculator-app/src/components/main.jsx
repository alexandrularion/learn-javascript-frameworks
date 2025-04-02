import styles from "./main.module.css";
import Button from "./button";
import Heading from "./heading";
import React from "react";

const operations = ["/", "*", "-", "+", "%"];

const Main = () => {
  // Tip: State is data stored inside our component that can be changed over time
  const [output, setOutput] = React.useState("0"); // Tip: The value returned [getter, setter]

  const handleOperation = (operation) => {
    console.log(`[Action]: (${operation}) - `, output);

    const lastChar = output[output.length - 1];
    const isLastCharOperation = operations.includes(lastChar);

    // Tip: Check if the latest char in the output has one of the possible operations
    if (isLastCharOperation && lastChar !== operation) {
      const outputWithoutLastOperation = output.slice(0, output.length - 1);
      setOutput(outputWithoutLastOperation + operation); // i.e. "1"+"+" = "1+", i.e. "1" + "/" + "1" = "1/1"
    } else if (!isLastCharOperation) {
      setOutput(output + operation);
    }
  };

  const handleNumber = (number) => {
    console.log(`[Action]: (${number}) - `, output);

    let hasOperation = false;

    // Tip: Always reset to the latest number if no operation found
    output.split("").forEach((char) => {
      if (operations.includes(char)) {
        hasOperation = true;
      }
    });

    if (!hasOperation) {
      setOutput(number);
    } else {
      setOutput(output + number);
    }
  };

  const buttons = [
    // Row 1
    {
      name: "C",
      variant: "secondary",
      gridArea: "a1",
      onClick: () => {
        console.log("[Action]: Clear - ", output);
        setOutput("0"); // Tip: Set the state to the initial value
      },
    },
    { name: "±", variant: "secondary", gridArea: "a2", onClick: () => {} },
    { name: "%", variant: "secondary", gridArea: "a3", onClick: () => {} },
    {
      name: "÷",
      variant: "primary",
      gridArea: "a4",
      onClick: () => handleOperation("/"),
    },

    // Row 2
    {
      name: "7",
      variant: "secondary",
      gridArea: "b1",
      onClick: () => handleNumber("7"),
    },
    {
      name: "8",
      variant: "secondary",
      gridArea: "b2",
      onClick: () => handleNumber("8"),
    },
    {
      name: "9",
      variant: "secondary",
      gridArea: "b3",
      onClick: () => handleNumber("9"),
    },
    {
      name: "×",
      variant: "primary",
      gridArea: "b4",
      onClick: () => handleOperation("*"),
    },

    // Row 3
    {
      name: "4",
      variant: "secondary",
      gridArea: "c1",
      onClick: () => handleNumber("4"),
    },
    {
      name: "5",
      variant: "secondary",
      gridArea: "c2",
      onClick: () => handleNumber("5"),
    },
    {
      name: "6",
      variant: "secondary",
      gridArea: "c3",
      onClick: () => handleNumber("6"),
    },
    {
      name: "−",
      variant: "primary",
      gridArea: "c4",
      onClick: () => handleOperation("-"),
    },

    // Row 4
    {
      name: "1",
      variant: "secondary",
      gridArea: "d1",
      onClick: () => handleNumber("1"),
    },
    {
      name: "2",
      variant: "secondary",
      gridArea: "d2",
      onClick: () => handleNumber("2"),
    },
    {
      name: "3",
      variant: "secondary",
      gridArea: "d3",
      onClick: () => handleNumber("3"),
    },
    {
      name: "+",
      variant: "primary",
      gridArea: "d4",
      onClick: () => handleOperation("+"),
    },

    // Row 5
    {
      name: "0",
      variant: "tertiary",
      gridArea: "e1",
      onClick: () => handleNumber("0"),
    },
    { name: ".", variant: "secondary", gridArea: "e2", onClick: () => {} },
    {
      name: "=",
      variant: "primary",
      gridArea: "e3",
      onClick: () => {
        const result = eval(output); // Tip: Eval evaluates the JavaScript code given as string and run it
        setOutput(String(result)); // Tip: String constructor is used to convert any type to string
      },
    },
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
                onClick={button.onClick}
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
