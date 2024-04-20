import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    // we do what we want here
    // the fired event (triggered when the user type in email input )
    console.log(event.target.value); // we supose that we wrote: "john.doe@gmail.com"
    setEmail(event.target.value); // we set the email state with the new value from email input
  };

  const handleFullNameChange = (e) => {
    console.log(e.target.value); // we supose that we wrote: "John Doe"
    setFullName(e.target.value); // we set the fullName state with the new value from fullName input
  };

  const handleMessageChange = (myEvent) => {
    console.log(myEvent.target.value);
    setMessage(myEvent.target.value);
  };

  return (
    <form
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "500px",
      }}
      onSubmit={(e) => {
        // Prevent page to refresh when clicking on submit button
        e.preventDefault();

        // See all the states updated
        console.log(email, fullName, message);
      }}
    >
      <h2>Contact Form</h2>
      <input
        type={"email"}
        name={"email"}
        placeholder="Email"
        onChange={handleEmailChange}
      />
      <input
        type={"text"}
        name={"fullName"}
        placeholder="Full Name"
        onChange={handleFullNameChange}
      />
      <textarea
        name={"message"}
        placeholder="Message"
        onChange={handleMessageChange}
      />
      <button type="submit">Send message</button>
      <br />
      <p>{email}</p>
      <p>{fullName}</p>
      <p>{message}</p>
    </form>
  );
};
export default Form;
