## ✅ Task 1: **Create a New Vite + React Project for Rendering**

- **Task**: Set up a new Vite + React project.
- **Student to do**:
  - Use the following commands to initialize and run the app:

```bash
npm create vite@latest my-react-rendering --template react
cd my-react-rendering
npm install
npm run dev
```

---

## Task 2: **Handle User-initiated Events (Click to Increment Counter)**

- **File**: `src/CounterButton.jsx`
- **What you need to do**: Complete the event handler that updates the state on click.

```jsx
import { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // 👉 Student: Update the count here using setCount
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default CounterButton;
```

---

## Task 3: **Make Components Remember Text Input**

- **File**: `src/NameInput.jsx`
- **What you need to do**: Complete the `onChange` and `handleSave` logic.

```jsx
import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  const handleSave = () => {
    // 👉 Student: Save the current name into savedName
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={
          (e) => {
            // 👉 Student: Update the name state here
          }
        } 
      />
      <button onClick={handleSave}>Save Name</button>
      <p>Saved Name: {savedName}</p>
    </div>
  );
}

export default NameInput;
```

---

## Task 4: **React UI Update Phases**

- **File**: `src/PhaseUpdate.jsx`
- **What you need to do**: Add conditional rendering based on a state flag.

```jsx
import { useState } from 'react';

function PhaseUpdate() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // 👉 Student: set isClicked to true
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {/* 👉 Student: Show different text based on isClicked */}
    </div>
  );
}

export default PhaseUpdate;
```

---

## Task 5: **Asynchronous State Behavior**

- **File**: `src/AsyncStateUpdate.jsx`
- **What you need to do**: Complete the log behavior before and after state changes.

```jsx
import { useState, useEffect } from 'react';

function AsyncStateUpdate() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Before Update:', count);
    setCount(count + 1);
    console.log('After Update:', count); // this won’t reflect the new value yet
  };

  useEffect(() => {
    // 👉 Student: Log updated count here
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default AsyncStateUpdate;
```

---

## Task 6: **Queueing Multiple State Updates**

- **File**: `src/DoubleCounter.jsx`
- **What you need to do**: Complete both counter updates inside the event.

```jsx
import { useState } from 'react';

function DoubleCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    // 👉 Student: Increment both count1 and count2
  };

  return (
    <div>
      <p>Counter 1: {count1}</p>
      <p>Counter 2: {count2}</p>
      <button onClick={handleClick}>Increment Both</button>
    </div>
  );
}

export default DoubleCounter;
```

---

## Task 7: **Update an Object in State**

- **File**: `src/UserInfo.jsx`
- **What you need to do**: Use the spread operator to update one field of an object.

```jsx
import { useState } from 'react';

function UserInfo() {
  const [user, setUser] = useState({ name: 'Alice', age: 30 });

  const updateName = () => {
    // 👉 Student: Update the name only (use spread operator)
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}

export default UserInfo;
```

---

## Task 8: **Update an Array in State**

- **File**: `src/TaskList.jsx`
- **What you need to do**: Add new item to array using spread operator.

```jsx
import { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);

  const addTask = () => {
    // 👉 Student: Add a new task using spread operator
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskList;
```

---

## Task 9: **Use `useEffect` After State Change**

- **File**: `src/EffectAfterClick.jsx`
- **What you need to do**: Log side effects with `useEffect`.

```jsx
import { useState, useEffect } from 'react';

function EffectAfterClick() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // 👉 Student: Log message when count updates
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default EffectAfterClick;
```

---

## Task 10: **Interactive Profile with Multiple Inputs**

- **File**: `src/ProfileUpdate.jsx`
- **What you need to do**: Wire up the inputs to state.

```jsx
import { useState } from 'react';

function ProfileUpdate() {
  const [name, setName] = useState('Alice');
  const [age, setAge] = useState(30);

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        placeholder="Enter name"
        onChange={(e) => {
          // 👉 Student: update name state
        }}
      />
      <input 
        type="number" 
        value={age} 
        placeholder="Enter age"
        onChange={(e) => {
          // 👉 Student: update age state
        }}
      />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default ProfileUpdate;
```

---

## ✅ Task 11: **Render All Components Together**

- **File**: `src/App.jsx`
- **What you need to do**: Import and render all previous components together in this file.

```jsx
// 👉 Student: Import your components here
// Example:
// import CounterButton from './CounterButton';

function App() {
  return (
    <div>
      <h1>React State & Interactivity Practice</h1>
      {/* 👉 Student: Add your components here one by one */}
      {/* <CounterButton /> */}
    </div>
  );
}

export default App;
```