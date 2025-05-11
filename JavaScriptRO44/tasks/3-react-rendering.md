## ✅ Task 1: **Create a New Vite + React Project for Rendering**

- **Task**: Set up a new Vite + React project specifically for learning state and interactivity.
- **Tips**:
  - Open your terminal and create a new project using `npm create vite@latest`.
  - Follow the previous steps for setting up the Vite project to ensure you have a clean slate for this section.

```bash
npm create vite@latest my-react-rendering --template react
cd my-react-rendering
npm install
npm run dev
```

---

## Task 2: **Handle User-initiated Events**

- **Task**: Create a button that increments a counter when clicked.
- **Tips**:
  - User-initiated events like clicks are handled by attaching event handlers such as `onClick`.
  - You need to use **state** to keep track of the counter.

- **File**: `src/CounterButton.jsx`
```jsx
import { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
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

## Task 3: **Make Components Remember Information with State**

- **Task**: Add a text input and a button to save the entered text in the component state.
- **Tips**:
  - **State** allows you to store information that can change over time, like the text entered in an input field.
  - The component will re-render automatically whenever the state changes.

- **File**: `src/NameInput.jsx`
```jsx
import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  const handleSave = () => {
    setSavedName(name);
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={handleSave}>Save Name</button>
      <p>Saved Name: {savedName}</p>
    </div>
  );
}

export default NameInput;
```

---

## Task 4: **React Updates UI in Two Phases**

- **Task**: Create a component that shows when a button is clicked, then updates the UI accordingly.
- **Tips**:
  - React updates the DOM in two phases: 
    1. It **recalculates** the UI (by comparing virtual DOM to actual DOM).
    2. It then **commits** those changes to the DOM.
  - This can result in the UI not being updated immediately after a state change, but React ensures the UI is updated efficiently.

- **File**: `src/PhaseUpdate.jsx`
```jsx
import { useState } from 'react';

function PhaseUpdate() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {isClicked ? <p>The button was clicked!</p> : <p>Click the button</p>}
    </div>
  );
}

export default PhaseUpdate;
```

---

## Task 5: **Why State Doesn’t Update Immediately**

- **Task**: Demonstrate the asynchronous nature of state updates by creating a button that logs the count before and after a click.
- **Tips**:
  - React batches state updates to optimize performance, which is why state might not immediately reflect its new value after a change.
  - Use `useEffect` to monitor state updates after the render.

- **File**: `src/AsyncStateUpdate.jsx`
```jsx
import { useState, useEffect } from 'react';

function AsyncStateUpdate() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Before Update:', count);
    setCount(count + 1);
    console.log('After Update (same render):', count);
  };

  useEffect(() => {
    console.log('Updated count:', count);
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

## Task 6: **Queue Multiple State Updates**

- **Task**: Create a component that increments both a counter and a second value when a button is clicked.
- **Tips**:
  - Multiple state updates can be queued, but React will process them together in the next render cycle.
  - The updates do not occur immediately after calling `setState`—they’re scheduled.

- **File**: `src/DoubleCounter.jsx`
```jsx
import { useState } from 'react';

function DoubleCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
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

- **Task**: Create a component that stores an object (e.g., a user’s information) in state and updates one property of the object when a button is clicked.
- **Tips**:
  - To update an object in state, you need to use the **spread operator** to ensure that you don’t overwrite the entire object.

- **File**: `src/UserInfo.jsx`
```jsx
import { useState } from 'react';

function UserInfo() {
  const [user, setUser] = useState({ name: 'Alice', age: 30 });

  const updateName = () => {
    setUser(prevUser => ({ ...prevUser, name: 'Bob' }));
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

- **Task**: Create a component that stores an array (e.g., a list of tasks) in state and adds a new item to the array when a button is clicked.
- **Tips**:
  - To update an array in state, use the spread operator to create a new array with the added element.

- **File**: `src/TaskList.jsx`
```jsx
import { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);

  const addTask = () => {
    setTasks([...tasks, `Task ${tasks.length + 1}`]);
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

## Task 9: **Use `useEffect` to Handle Side Effects After State Changes**

- **Task**: Create a component that tracks when a button is clicked and logs the count to the console after the state is updated.
- **Tips**:
  - `useEffect` runs after the render cycle, making it perfect for handling side effects after state changes.
  - It’s also useful when working with asynchronous operations.

- **File**: `src/EffectAfterClick.jsx`
```jsx
import { useState, useEffect } from 'react';

function EffectAfterClick() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`Button clicked ${count} times`);
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

## Task 10: **Combine Multiple Interactive Components**

- **Task**: Create an interactive profile that allows users to change their name and age using separate input fields.
- **Tips**:
  - Use separate state variables for different pieces of information, like the name and age.
  - Use `onChange` for capturing input from text fields.

- **File**: `src/ProfileUpdate.jsx`
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
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))} 
        placeholder="Enter age"
      />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default ProfileUpdate;
```