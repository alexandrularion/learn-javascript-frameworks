import TodoCard from "./todo-card";

const TodoList = (props) => {
  // Tip: Store the style in a variable to avoid double curly braces at attribute
  const style = { display: "flex", flexDirection: "column", gap: "30px" };

  // Tip: Generating an array of components that are displayed on screen
  console.log(
    props.tasks.map((task) => (
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
      {props.tasks.map((task) => {
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
