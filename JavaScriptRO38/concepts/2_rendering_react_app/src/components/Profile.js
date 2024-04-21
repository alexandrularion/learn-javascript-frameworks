function Profile(props) {
  return (
    <div
      style={{
        border: "1px solid #000",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <h1>
        {props.name}
        {props.isAdmin ? "(Admin)" : null}
      </h1>
      <p>{props.email}</p>
      <p
        style={
          props.age >= 20
            ? {
                color: "red",
                fontWeight: "bold",
              }
            : {}
        }
      >
        {props.age >= 20 ? props.age : null}
      </p>
    </div>
  );
}
export default Profile;
