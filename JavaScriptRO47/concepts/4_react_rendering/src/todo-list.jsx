import TodoCard from "./todo-card";

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

  // Tip: Generating an array of components that are displayed on screen
  console.log(
    tasks.map((task) => (
      <TodoCard
        key={task.id}
        name={task.name}
        dueDate={task.dueDate}
        status={task.status}
      />
    ))
  );

  return (
    <div style={style}>
      {/* Tip: We must build an array of JSX to be able see the cards */}
      {tasks.map((task) => {
        // Tip: We can process the data before returning the <TodoCard/> component
        const name = task.name.split(" ");
        return (
          // The properties (name, dueDate, status) must be the same as they are in <TodoCard /> component
          <TodoCard
            key={task.id}
            name={name}
            dueDate={task.dueDate}
            status={task.status}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
