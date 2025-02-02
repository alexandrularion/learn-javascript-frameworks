import React from "react";
import Counter from "./counter";
import TodoList from "./todo-list";
import AddTodo from "./add-todo";
import withAuthHoc from "./auth-hoc";
import AuthDeny from "./auth-deny";

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
  const [hasReachedTasksLimit, setHasReachedTasksLimit] = React.useState(false);

  React.useEffect(() => {
    console.log("useEffect", tasks);
    // Tip: The useEffect callback is called every time "tasks" state is updated
    if (tasks.length === 5) {
      setHasReachedTasksLimit(true);
    }
  }, [tasks]);

  return (
    <>
      Hello world
      <Counter />
      <AddTodo setTasks={setTasks} />
      {/* Tip: Use the ternary operator to display JSX conditionally */}
      {hasReachedTasksLimit ? (
        <p>You reached the maximum amount of tasks you can add. (5/5)</p>
      ) : (
        <p>
          You can add up to {5 - tasks.length} tasks. ({tasks.length} / 5)
        </p>
      )}
      <TodoList tasks={tasks} />
    </>
  );
}

const AuthorisedApp = withAuthHoc(App, AuthDeny);

export default AuthorisedApp;
