import { useState, useEffect } from "react";

const WithEffect = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Our useEffect run once");
    console.log(message);
  }, [message]);

  return (
    <div>
      <input
        type="text"
        placeholder="Put location"
        name={"location"}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default WithEffect;
