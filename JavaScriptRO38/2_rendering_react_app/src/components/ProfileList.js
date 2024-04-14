import Profile from "./Profile";

const ProfileList = (props) => {
  console.log(props); // { users: [....] }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "50px",
      }}
    >
      {/* <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile /> */}
      {props.users.map((user) => {
        // At each iteration (loop): { name: '',email:'', age: ..., isAdmin: ... }
        // Example of first iteration: { name: "John Doe", email: "john.doe@gmail.com", age: 15, isAdmin: false },
        return (
          <Profile
            name={user.name} // The passed value: "John Doe"
            email={user.email} // The passed value: "john.doe@gmail.com"
            age={user.age} // The passed value: 15
            isAdmin={user.isAdmin} // The passed value: false
          />
        );
      })}
      {/* above we will form a new list with form of: [<Profile />,<Profile />,<Profile />,<Profile />,<Profile />] */}
    </div>
  );
};
export default ProfileList;
