// Task 3: Props
const UserProfile = (props) => {
  const isAdmin = props.username === "ion.popescu2";

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.biography}</p>
      <p>{isAdmin ? "Administrator" : "Guest"}</p>
    </div>
  );
};

export default UserProfile;
