const AddTodo = (props) => {
  const handleSubmit = (event) => {
    // Tip: Prevent browser to reload the page
    event.preventDefault();
    console.log(event);

    // Tip: Extract the values from the targeted elements
    const name = event.target.elements.namedItem("name").value;
    const dueDate = event.target.elements.namedItem("dueDate").value;
    const status = event.target.elements.namedItem("status").value;
    console.log(name, dueDate, status);

    props.setTasks((previousTasks) => [
      {
        id: 0,
        name: name,
        dueDate: dueDate,
        status: status,
      },
      ...previousTasks,
    ]);
  };

  return (
    <form
      style={{
        display: "flex",
        gap: "20px",
        padding: "50px",
      }}
      //Tip: Most of the events start with "on" preffix e.g. "onClick"
      onSubmit={handleSubmit}
    >
      <input name="name" type="text" placeholder="Name of the task" />
      <input name="dueDate" type="date" placeholder="Choose due date" />
      <select name="status" defaultValue="default">
        <option value="default" defaultChecked={true} disabled={true}>
          Choose the status
        </option>
        <option value="not_started">Not started</option>
        <option value="in_progress">In progress</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTodo;
