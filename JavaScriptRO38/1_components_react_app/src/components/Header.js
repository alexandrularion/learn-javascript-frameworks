import React from "react";

function Header() {
  const isLoggedIn = true;
  const user = { name: "John", surName: "Doe", email: "john.doe@yahoo.com" };

  return (
    <header>
      {isLoggedIn ? (
        <>
          <h1>Hello, {`${user.name} ${user.surName}`}</h1>
          <p>{user.email}</p>
        </>
      ) : (
        <p>Hello, you're not logged in. Please go to sign in page.</p>
      )}
    </header>
  );
}

export default Header;
