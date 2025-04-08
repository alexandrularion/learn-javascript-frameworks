## ⚡ 2-Hour React Mini Project: **Task Manager App**  
> Total time: ~2 hours  
> Level: Beginner  
> Structure: 8 simplified tasks that flow into each other.

---

### ✅ **Task 1: Project Setup (15 min)**  
**Goal**: Create the React app using Vite and prep your folder structure.

```bash
npm create vite@latest task-manager-app
cd task-manager-app
npm install
npm run dev
```

**Tips**:
- Choose React + JavaScript
- Delete unused files (`App.css`, `logo.svg`, etc.)
- Keep `App.jsx` clean: just a div that says "Task Manager App"
- Create folders: `components/`, `styles/`

---

### ✅ **Task 2: Add a `header.jsx` Component (10 min)**  
**Goal**: Create and import a header to display the app title.

```jsx
// components/header.jsx
export default function Header() {
  return <h1>Task Manager</h1>;
}
```

In `App.jsx`:
```jsx
import Header from './components/header';

function App() {
  return <Header />;
}
```

**Tips**:
- Name files using **kebab-case**
- Component names must be **capitalized**
- Avoid mixing concerns: header only displays UI

---

### ✅ **Task 3: Display a List of Static Tasks (15 min)**  
**Goal**: Show a few hardcoded tasks in a list using `.map()`.

```jsx
const tasks = ['Buy milk', 'Do homework', 'Read book'];
```

Create `task-item.jsx`:
```jsx
export default function TaskItem({ title }) {
  return <li>{title}</li>;
}
```

Render in `App.jsx`:
```jsx
{tasks.map((task, index) => (
  <TaskItem key={index} title={task} />
))}
```

**Tips**:
- Always use a `key` prop when mapping
- Keep components dumb: just receive props

---

### ✅ **Task 4: Convert to State with `useState` (10 min)**  
**Goal**: Store and manage tasks in component state.

```jsx
const [tasks, setTasks] = useState(['Buy milk', 'Do homework']);
```

**Tips**:
- Never mutate state directly (use `setTasks([...tasks])`)
- This prepares for adding new tasks later

---

### ✅ **Task 5: Add a New Task with a Form (20 min)**  
**Goal**: Add a controlled input and a submit handler.

Create `task-form.jsx`:
```jsx
export default function TaskForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
```

**In App.jsx**:
```jsx
const addTask = (taskText) => setTasks([...tasks, taskText]);
<TaskForm onAdd={addTask} />
```

**Tips**:
- Keep input controlled with `useState`
- Prevent empty task submissions

---

### ✅ **Task 6: Add Mark as Done Toggle (20 min)**  
**Goal**: Allow clicking on a task to mark it done (toggle style).

Update task structure:
```jsx
useState([{ id: 1, title: 'Buy milk', completed: false }])
```

In `task-item.jsx`:
```jsx
export default function TaskItem({ title, completed, onToggle }) {
  return (
    <li
      onClick={onToggle}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {title}
    </li>
  );
}
```

**Tips**:
- Add `onClick` to toggle `completed`
- Avoid mutating task object directly — use `.map()`

---

### ✅ **Task 7: Remove Completed Tasks (15 min)**  
**Goal**: Add a button to filter out completed tasks.

```jsx
const clearCompleted = () =>
  setTasks(tasks.filter((task) => !task.completed));
```

In `App.jsx`:
```jsx
<button onClick={clearCompleted}>Clear Completed</button>
```

**Tips**:
- `.filter()` creates a new array
- This helps reinforce pure functions in React

---

### ✅ **Task 8: Small Styling Touches (15 min)**  
**Goal**: Add spacing, font, and layout using CSS.

Create `App.css` and import it in `App.jsx`.

Example styles:
```css
body {
  font-family: Arial, sans-serif;
  padding: 2rem;
  background: #f4f4f4;
}

li {
  cursor: pointer;
  margin: 0.5rem 0;
}
```

**Tips**:
- Keep styles simple, avoid nesting early
- Try using `:hover` to improve interactivity

---

## 🧠 Bonus Ideas (If Time Left)

- ✅ Save tasks to `localStorage`
- ✅ Show count of completed vs total
- ✅ Filter buttons: All / Active / Done

---

## 🔖 Component File Naming Recap (All kebab-case)

| Component Role     | Filename             |
|--------------------|----------------------|
| Header             | `header.jsx`         |
| Task item          | `task-item.jsx`      |
| Task input form    | `task-form.jsx`      |