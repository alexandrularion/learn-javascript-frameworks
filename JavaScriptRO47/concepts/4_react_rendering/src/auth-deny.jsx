const AuthDeny = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>You are not authenticated.</h2>
      <p>Please go to login page or create a new account.</p>
      <button>Go to login</button>
    </div>
  );
};

export default AuthDeny;
