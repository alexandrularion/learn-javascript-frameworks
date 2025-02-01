import React from "react";

const TodoCard = (props) => {
  const ref = React.useRef();

  console.log(ref);

  React.useEffect(() => {
    // Tip: Any ref doesn't trigger a component updates (we don't need it in dependency array)
    console.log(ref);
    // Tip: The props should be included in dependency array because it triggers component udpates
    console.log(props);
  }, [props]);

  return (
    <div ref={ref} style={{ border: "1px solid #000" }}>
      <h1>{props.name}</h1>
      <p>{props.dueDate}</p>
      <p>{props.status}</p>
    </div>
  );
};

export default TodoCard;
