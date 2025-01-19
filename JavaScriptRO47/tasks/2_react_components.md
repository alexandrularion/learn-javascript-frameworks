#### 1. **Check the Project Setup**  
   - **Task**: Confirm the app is working by running the development server and inspecting the default Vite React template.  
   - **Tips**:  
     - Run `npm run dev` to start the development server.  
     - Open the app in a browser and verify the default page loads.  
     - Clean up the default `App.jsx` file, leaving only an empty `<div>`.  
   - **Code to Reset `App.jsx`**:  
     ```jsx
     function App() {
       return <div>{/* Add components here */}</div>;
     }

     export default App;
     ```

---

#### 2. **Create a Simple Component**  
   - **Task**: Inside the `src` folder, create a `Welcome` component that displays "Hello, React!".  
   - **Tips**:  
     - Use a basic functional component.  
     - Add the component to `App.jsx`.  
   - **Base Code**:  
     ```jsx
     // src/Welcome.jsx
     function Welcome() {
       return <h1>{/* Add message here */}</h1>;
     }

     export default Welcome;

     // Usage in App.jsx
     // import Welcome from './Welcome';
     // <Welcome />
     ```

---

#### 3. **Use Props to Customize a Component**  
   - **Task**: Update the `Welcome` component to accept a `name` prop and display "Hello, [name]!".  
   - **Tips**:  
     - Use `{}` to render props dynamically.  
   - **Base Code**:  
     ```jsx
     function Welcome({ name }) {
       return <h1>{/* Show "Hello, [name]!" here */}</h1>;
     }

     export default Welcome;

     // Usage in App.jsx
     // <Welcome name="Alice" />
     ```

---

#### 4. **Add State to a Component**  
   - **Task**: Create a `Counter` component with a static count value using `useState`.  
   - **Tips**:  
     - Initialize the state with `0`.  
     - Use the state variable for display, but don't update it yet.  
   - **Base Code**:  
     ```jsx
     import React, { useState } from 'react';

     function Counter() {
       const [count] = useState(0);

       return <p>Count: {/* Add count here */}</p>;
     }

     export default Counter;
     ```

---

#### 5. **Conditional Rendering**  
   - **Task**: Create a `Status` component that displays "Online" if a `isOnline` prop is true and "Offline" otherwise.  
   - **Tips**:  
     - Use a ternary operator for the condition.  
   - **Base Code**:  
     ```jsx
     function Status({ isOnline }) {
       return <p>{/* Show "Online" or "Offline" */}</p>;
     }

     export default Status;

     // Usage example in App.jsx
     // <Status isOnline={true} />
     ```

---

#### 6. **Combine Components**  
   - **Task**: Create a `Profile` component that uses the `Welcome` and `Status` components.  
   - **Tips**:  
     - Pass props from `Profile` to nested components.  
   - **Base Code**:  
     ```jsx
     function Profile({ name, isOnline }) {
       return (
         <div>
           {/* Render Welcome and Status here */}
         </div>
       );
     }

     export default Profile;

     // Usage example in App.jsx
     // <Profile name="Alice" isOnline={true} />
     ```

---

#### 7. **Static State-Based Component**  
   - **Task**: Create a `Dashboard` component that shows a user name stored in state.  
   - **Tips**:  
     - Use `useState` to store a default user name.  
     - Pass the state to the `Welcome` component.  
   - **Base Code**:  
     ```jsx
     import React, { useState } from 'react';

     function Dashboard() {
       const [user] = useState("Alice");

       return (
         <div>
           {/* Use the Welcome component to show the user */}
         </div>
       );
     }

     export default Dashboard;
     ```

---

#### 8. **Reusable Component**  
   - **Task**: Create a reusable `Card` component that accepts `title` and `description` props.  
   - **Tips**:  
     - Use semantic HTML tags for better structure (`<h2>` for title, `<p>` for description).  
   - **Base Code**:  
     ```jsx
     function Card({ title, description }) {
       return (
         <div className="card">
           <h2>{/* Add title here */}</h2>
           <p>{/* Add description here */}</p>
         </div>
       );
     }

     export default Card;

     // Usage example in App.jsx
     // <Card title="React Basics" description="Learn step by step." />
     ```

---

#### 9. **Dynamic Props with Conditional Logic**  
   - **Task**: Create a `Greeting` component that changes the message based on a `timeOfDay` prop (`morning`, `afternoon`, `evening`).  
   - **Tips**:  
     - Use `if` statements or a switch-case to determine the message.  
   - **Base Code**:  
     ```jsx
     function Greeting({ timeOfDay }) {
       let message = "";

       // Add logic to set message based on timeOfDay

       return <h1>{/* Show the message */}</h1>;
     }

     export default Greeting;

     // Usage example in App.jsx
     // <Greeting timeOfDay="morning" />
     ```

---

#### 10. **Combine Everything**  
   - **Task**: Create an `App` component that combines all components (`Greeting`, `Profile`, `Card`, `Status`).  
   - **Tips**:  
     - Use proper spacing or containers for layout.  
     - Pass meaningful props to each component.  
   - **Base Code**:  
     ```jsx
     function App() {
       return (
         <div>
           {/* Add Greeting, Profile, Card, and Status here */}
         </div>
       );
     }

     export default App;
     ```