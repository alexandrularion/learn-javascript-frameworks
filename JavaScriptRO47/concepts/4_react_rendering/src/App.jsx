import React from "react";
import Counter from "./counter";
import TodoList from "./todo-list";
import AddTodo from "./add-todo";

function App() {
  const [tasks, setTasks] = React.useState([
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
  ]);

  return (
    <>
      Hello world
      <Counter />
      <AddTodo setTasks={setTasks} />
      <TodoList tasks={tasks} />
    </>
  );
}

export default App;
