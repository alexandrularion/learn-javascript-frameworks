const TodoList = () => {
  const tasks = [
    {
      id: 0,
      name: "Learn about functions in js",
      dueDate: "until 20.01.2025",
      status: "in progress",
    },
    {
      id: 1,
      name: "Do the react tasks",
      dueDate: "until 26.01.2025",
      status: "not started",
    },
    {
      id: 2,
      name: "Do the homeworks",
      dueDate: "until 23.01.2025",
      status: "done",
    },
    {
      id: 3,
      name: "Learn about functions in js",
      dueDate: "until 20.01.2025",
      status: "in progress",
    },
    {
      id: 4,
      name: "Do the homeworks",
      dueDate: "until 23.01.2025",
      status: "done",
    },
    {
      id: 5,
      name: "Do the homeworks",
      dueDate: "until 23.01.2025",
      status: "done",
    },
    {
      id: 6,
      name: "Learn about functions in js",
      dueDate: "until 20.01.2025",
      status: "in progress",
    },
    {
      id: 7,
      name: "Do the homeworks",
      dueDate: "until 23.01.2025",
      status: "done",
    },
  ];

  // Tip: Store the style in a variable to avoid double curly braces at attribute
  const style = { display: "flex", flexDirection: "column", gap: "30px" };

  return (
    <div style={style}>
      {tasks.map((task) => {
        return (
          <div key={task.id} style={{ border: "1px solid #000" }}>
            <h1>{task.name}</h1>
            <p>{task.dueDate}</p>
            <p>{task.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
