import "./App.css";
import Profile from "./components/Profile";
import ProfileList from "./components/ProfileList";

function App() {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      age: 15,
      isAdmin: false,
    },
    {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      age: 22,
      isAdmin: false,
    },
    {
      name: "Will Smith",
      email: "will.smith@gmail.com",
      age: 30,
      isAdmin: true,
    },
    {
      name: "Anne Smith",
      email: "anne.smith@gmail.com",
      age: 22,
      isAdmin: true,
    },
    {
      name: "Anne Jr. Smith",
      email: "anne.jr.smith@gmail.com",
      age: 8,
      isAdmin: false,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "50px",
      }}
    >
      {/* The <ProfileList /> component will render a list of profiles */}
      {/* Props: property={value} */}
      <ProfileList users={users} />

      {/* The <Profile /> component below is rendered only on home (index page) */}
      {window.location.pathname === "/" ? (
        <Profile
          name={"John"}
          email={"john@gmail.com"}
          age={15}
          isAdmin={false}
        />
      ) : null}

      {/* Passing props to <Profile /> component and display it based on properties passed */}
      <Profile
        name={"Will"}
        email={"john@gmail.com"}
        age={20}
        isAdmin={false}
      />
      <Profile
        name={"The Rock"}
        email={"john@gmail.com"}
        age={20}
        isAdmin={true}
      />
      <Profile name={"WWE"} email={"john@gmail.com"} age={17} isAdmin={false} />
    </div>
  );
}

export default App;
