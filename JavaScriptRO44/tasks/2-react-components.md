### Task 1: **Initialize a Notes App with Vite**  
- **Task**: Set up a Vite project called `notes-app` using React.  
- **Steps**:  
  1. Create the Vite project:  
     ```bash
     npm create vite@latest notes-app
     ```
     - Select `React` and your preferred variant.  
  2. Navigate and install dependencies:  
     ```bash
     cd notes-app  
     npm install
     npm run dev
     ```
  3. Confirm the app runs in your browser at the local address.

- **Clean Up**:
  - Remove demo styles and images from `src/assets`.
  - Replace `App.jsx` with:
    ```jsx
    function App() {
      return <div>{/* Main app components */}</div>;
    }

    export default App;
    ```

- **Tips**:
  - Use a folder name relevant to your project idea.
  - Make sure Node.js is installed properly.

---

### Task 2: **Create a Header Component**  
- **Task**: Create a `Header` component with the title "My Notes App".  
- **Tips**:
  - Use a semantic tag like `<header>`.
- **Base Code**:  
  ```jsx
  // src/Header.jsx
  function Header() {
    return <header><h1>{/* Title here */}</h1></header>;
  }

  export default Header;

  // App.jsx
  // import Header from './Header';
  // <Header />
  ```

---

### Task 3: **Pass a Subtitle via Props**  
- **Task**: Update `Header` to accept a `subtitle` prop and display it under the title.  
- **Tips**:
  - Wrap both elements in a container like a `<div>` or `<header>`.
- **Base Code**:
  ```jsx
  function Header({ subtitle }) {
    return (
      <header>
        <h1>My Notes App</h1>
        <p>{/* Add subtitle here */}</p>
      </header>
    );
  }

  export default Header;

  // Usage in App.jsx
  // <Header subtitle="Organize your thoughts" />
  ```

---

### Task 4: **Show Static Note Count with State**  
- **Task**: Create a `NoteCounter` component showing total notes using `useState`.  
- **Tips**:
  - Start with a fixed number like `5`.
- **Base Code**:
  ```jsx
  import React, { useState } from 'react';

  function NoteCounter() {
    const [notes] = useState(5);

    return <p>Total Notes: {/* Add value */}</p>;
  }

  export default NoteCounter;
  ```

---

### Task 5: **Render a Button Conditionally**  
- **Task**: Create a `SaveButton` component that only shows the button if `canSave` prop is true.  
- **Tips**:
  - Use `{canSave ? ... : null}` or `&&` logic.
- **Base Code**:
  ```jsx
  function SaveButton({ canSave }) {
    return (
      <>
        {canSave && <button>Save Note</button>}
      </>
    );
  }

  export default SaveButton;

  // Usage example
  // <SaveButton canSave={true} />
  ```

---

### Task 6: **Build a NoteCard with Reused Components**  
- **Task**: Create a `NoteCard` component that displays a note’s `title` and `content` using props.  
- **Tips**:
  - Structure content using semantic HTML and a `div.card` wrapper.
- **Base Code**:
  ```jsx
  function NoteCard({ title, content }) {
    return (
      <div className="card">
        <h3>{/* Title */}</h3>
        <p>{/* Content */}</p>
      </div>
    );
  }

  export default NoteCard;

  // Usage
  // <NoteCard title="Shopping List" content="Buy eggs, milk..." />
  ```

---

### Task 7: **User Info with Static State**  
- **Task**: Create a `UserInfo` component that displays a user's name from state.  
- **Tips**:
  - Initialize state with your name or a sample.
- **Base Code**:
  ```jsx
  import React, { useState } from 'react';

  function UserInfo() {
    const [user] = useState("Jane");

    return <p>Welcome, {/* Username here */}</p>;
  }

  export default UserInfo;
  ```

---

### Task 8: **Reusable Button Component**  
- **Task**: Build a `PrimaryButton` component that accepts `text` and `onClick` props.  
- **Tips**:
  - Use a button element with default styling.
- **Base Code**:
  ```jsx
  function PrimaryButton({ text, onClick }) {
    return <button onClick={onClick}>{/* Show button text */}</button>;
  }

  export default PrimaryButton;

  // Usage in App.jsx
  // <PrimaryButton text="Add Note" onClick={() => alert('Clicked!')} />
  ```

---

### Task 9: **Display a Time-Based Greeting**  
- **Task**: Create a `TimeGreeting` component that shows a message based on the current hour.  
- **Tips**:
  - Use `new Date().getHours()` and `if`/`else` logic.
- **Base Code**:
  ```jsx
  function TimeGreeting() {
    const hour = new Date().getHours();
    let message = "";

    // Set message based on hour range

    return <h2>{/* Show message */}</h2>;
  }

  export default TimeGreeting;
  ```

---

### Task 10: **App Component with All Parts**  
- **Task**: Assemble all components (`Header`, `NoteCard`, `UserInfo`, `TimeGreeting`, `PrimaryButton`) into `App.jsx`.  
- **Tips**:
  - Use `<div>` containers and spacing.
  - Pass appropriate props for demo purposes.
- **Base Code**:
  ```jsx
  function App() {
    return (
      <div>
        {/* Add TimeGreeting, Header, UserInfo, NoteCard, PrimaryButton here */}
      </div>
    );
  }

  export default App;
  ```