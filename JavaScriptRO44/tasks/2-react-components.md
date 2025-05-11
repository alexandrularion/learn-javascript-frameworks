## ✅ Task 1: **Create a Vite + React Project**

- **Task**: Set up your React + Vite project.
- **Tips**:
  - Open your terminal and follow the steps to create a new Vite + React project.
  - `npm create vite@latest` is the command that scaffolds the project for you.
  - After setting up, run the development server with `npm run dev` to see the initial app in the browser.
  - **Ensure that your project runs**: Navigate to `http://localhost:5173` to confirm that everything works.

```bash
npm create vite@latest react-components --template react
cd react-components
npm install
npm run dev
```

- **Clean `App.jsx`**:
```jsx
function App() {
  return <div>App is working!</div>;
}

export default App;
```

---

## Task 2: **Create Your First React Component**

- **Task**: Create a component that returns a simple `h1` with a title.
- **Tips**:
  - Components in React are functions that return JSX (a mix of JavaScript and HTML).
  - Each component should be in its own file for better organization.

- **File**: `src/Title.jsx`
```jsx
function Title() {
  return <h1>Welcome to My App</h1>;
}

export default Title;
```

---

## Task 3: **Create a Second Component**

- **Task**: Create another simple component for a subtitle.
- **Tips**:
  - Every component in React is just a JavaScript function that returns JSX.
  - Use `h2` or other tags for hierarchical content (e.g., a subtitle for your main title).

- **File**: `src/Subtitle.jsx`
```jsx
function Subtitle() {
  return <h2>Your React journey begins here.</h2>;
}

export default Subtitle;
```

---

## Task 4: **Use JSX to Add Markup**

- **Task**: Add more content to your `Subtitle` component using JSX.
- **Tips**:
  - JSX allows you to mix JavaScript expressions with HTML-like tags.
  - You can include HTML tags, like `<p>`, inside JSX to structure your content.

- **File**: `src/Subtitle.jsx` (overwrite previous one)
```jsx
function Subtitle() {
  return (
    <div>
      <h2>Your React journey begins here.</h2>
      <p>This app helps you learn how to use React step by step.</p>
    </div>
  );
}

export default Subtitle;
```

---

## Task 5: **Use Curly Braces to Add JavaScript in JSX**

- **Task**: Add JavaScript to your component to display the current date.
- **Tips**:
  - In JSX, use `{}` to insert JavaScript expressions into the HTML-like markup.
  - For example, `new Date()` is a JavaScript expression, and you can use it inside `{}` to render dynamic content.

- **File**: `src/Today.jsx`
```jsx
const today = new Date().toLocaleDateString();

function Today() {
  return <p>Today is: {today}</p>;
}

export default Today;
```

---

## Task 6: **Create a Component That Uses Props**

- **Task**: Create a component that accepts props and renders dynamic content.
- **Tips**:
  - Props are used to pass data from one component to another.
  - Props can be any data type, and the component will use them to display content.

- **File**: `src/Greeting.jsx`
```jsx
function Greeting(props) {
  return <h3>Hello, {props.name}!</h3>;
}

export default Greeting;
```

---

## Task 7: **Render Content Conditionally**

- **Task**: Conditionally render content based on the `isOnline` prop.
- **Tips**:
  - You can use conditional operators like the ternary operator (`? :`) or `if` statements in JSX.
  - This is useful for showing different content based on the props passed.

- **File**: `src/Status.jsx`
```jsx
function Status(props) {
  return <p>Status: {props.isOnline ? 'Online' : 'Offline'}</p>;
}

export default Status;
```

---

## Task 8: **Render a List with `.map()`**

- **Task**: Render a list of hobbies dynamically using `.map()`.
- **Tips**:
  - Use the `.map()` method to loop over an array and render components for each item.
  - Make sure to give each list item a unique `key` prop to avoid rendering issues.

- **File**: `src/Hobbies.jsx`
```jsx
function Hobbies(props) {
  return (
    <ul>
      {props.list.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
}

export default Hobbies;
```

---

## Task 9: **Keep Components Pure**

- **Task**: Create a pure component that only depends on its props and does not modify them.
- **Tips**:
  - Pure components are components that always render the same output for the same input (props).
  - This makes them easier to debug and reuse.

- **File**: `src/UserInfo.jsx`
```jsx
function UserInfo(props) {
  return <p>Logged in as: {props.user}</p>;
}

export default UserInfo;
```

---

## Task 10: **Create a Nested Component Tree**

- **Task**: Combine the `Greeting`, `Status`, `Hobbies`, and `UserInfo` components into a `Profile` component.
- **Tips**:
  - You can pass props down to child components, creating a nested structure.
  - Make sure each nested component has the necessary props for the content to render properly.

- **File**: `src/Profile.jsx`
```jsx
import Greeting from './Greeting';
import Status from './Status';
import Hobbies from './Hobbies';
import UserInfo from './UserInfo';

function Profile(props) {
  return (
    <div>
      <Greeting name={props.user} />
      <Status isOnline={props.isOnline} />
      <Hobbies list={props.hobbies} />
      <UserInfo user={props.user} />
    </div>
  );
}

export default Profile;
```

---

## ✅ Task 11: **Connect All Components in App.jsx**

- **Task**: Now, combine all components into the `App` component.
- **Tips**:
  - Import each of the components created in previous tasks into `App.jsx`.
  - Pass appropriate props to each component, and display them in the `App` component's JSX.

- **File**: `src/App.jsx`
```jsx
import Title from './Title';
import Subtitle from './Subtitle';
import Today from './Today';
import Profile from './Profile';

function App() {
  const users = [
    { name: 'Alice', isOnline: true, hobbies: ['Coding', 'Gaming'] },
    { name: 'Bob', isOnline: false, hobbies: ['Reading', 'Hiking'] }
  ];

  return (
    <div>
      <Title />
      <Subtitle />
      <Today />
      {users.map((user, index) => (
        <Profile
          key={index}
          user={user.name}
          isOnline={user.isOnline}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
}

export default App;
```