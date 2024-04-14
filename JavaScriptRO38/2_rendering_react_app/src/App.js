import "./App.css";
import PostList from "./components/PostList";
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

  const posts = [
    {
      user: {
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      src: "https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 10,
    },
    {
      user: {
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-lonely-walker.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 10,
    },
    {
      user: {
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      src: "https://images.pexels.com/photos/20528196/pexels-photo-20528196/free-photo-of-university.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 10,
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "350px calc(100% - 350px - 20px - 100px)",
        gap: "20px",
        padding: "50px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* The <ProfileList /> component will render a list of profiles */}
        {/* Prop structure: property={value} */}
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
        <Profile
          name={"WWE"}
          email={"john@gmail.com"}
          age={17}
          isAdmin={false}
        />
      </div>
      <PostList data={posts} />
    </div>
  );
}

export default App;
