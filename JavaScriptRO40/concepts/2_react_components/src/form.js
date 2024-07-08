import Button from "./button";
import React from "react";

const Form = () => {
  // react will update the component if using a state
  const [userEmail, setUserEmail] = React.useState(""); // you can put a default value

  // react will not update the component without state
  let email;

  const handleEmailChange = (event) => {
    console.log("event", event.target.value);

    // using the setter of the state will trigger a component update
    setUserEmail(event.target.value);

    // update the email variable will not trigger a component update
    email = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  // check if the userEmail variable is updated and trigger a component update
  console.log("user email - before return", userEmail);

  // Check if the email variable is updated and trigger a component update
  console.log("before return", email);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <input
        type="email"
        name="email"
        placeholder="john.doe@gmail.com"
        onChange={handleEmailChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm your new password"
      />
      <div>
        <input id="terms" type="checkbox" />
        <label for="terms">You agree to our terms and conditions.</label>
      </div>
      {/* <button onclick="....."></button> */}
      <Button type="submit" label={"Register new account"} />

      {/* See the value of the email entered by the user */}
      {email}

      {/* See the value of the userEmail entered by the user */}
      {userEmail}
    </form>
  );
};

export default Form;
