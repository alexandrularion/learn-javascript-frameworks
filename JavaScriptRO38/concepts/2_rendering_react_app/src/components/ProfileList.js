import Profile from "./Profile";

const ProfileList = (props) => {
  console.log(props); // { users: [....] }
  console.log(props.users); // [{ name: "John Doe", email: "john.doe@gmail.com", age: 15, isAdmin: false },....]
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "50px",
      }}
    >
      {/* Lists and Keys */}
      {props.users.map((user, index) => {
        // At each iteration (loop): { name: '',email:'', age: ..., isAdmin: ... }
        // Example of first iteration: { name: "John Doe", email: "john.doe@gmail.com", age: 15, isAdmin: false },
        console.log("the index inside list:", index); // the index of the list is not recommended
        return (
          <Profile
            key={index} // The key will be: 0
            name={user.name} // The passed value: "John Doe"
            email={user.email} // The passed value: "john.doe@gmail.com"
            age={user.age} // The passed value: 15
            isAdmin={user.isAdmin} // The passed value: false
          />
        );
      })}
      {/* Above we will create a new list with the form of: [<Profile />,<Profile />,<Profile />,<Profile />,<Profile />] */}
      {/* 
      What is really happening behind the scenes when we map over array:
      <Profile name={"John Doe"} email={"john.doe@gmail.com"} age={15} isAdmin={false} />
      <Profile name={"Jane Doe"} email={"jane.doe@gmail.com"} age={22} isAdmin={false} />
      <Profile name={"Will Smith"} email={"will.smith@gmail.com"} age={30} isAdmin={true} />
      <Profile name={"Anne Smith"} email={"anne.smith@gmail.com"} age={22} isAdmin={true} />
      <Profile name={"Anne Jr. Smith"} email={"anne.jr.smith@gmail.com"} age={8} isAdmin={true}/>
       */}
    </div>
  );
};
export default ProfileList;
