import "./App.css";
import Profile from "./Profile";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "50px",
      }}
    >
      {window.location.pathname !== "/" ? (
        <Profile
          name={"John"}
          email={"john@gmail.com"}
          age={15}
          isAdmin={false}
        />
      ) : null}
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
