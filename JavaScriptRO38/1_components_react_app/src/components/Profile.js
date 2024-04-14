import React, { useState } from "react";

function Profile(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <p>Sorry. You're not logged in to see this content.</p>;
  }

  return (
    <div>
      <button
        onClick={function () {
          setIsLoggedIn(false);
        }}
      >
        Logout
      </button>
      <p>{props.user.isAdmin ? "Admin" : "Guest"}</p>
      <div>
        <h2>{`${props.user.surName} ${props.user.name}`}</h2>
        <p>{props.user.email}</p>
      </div>
      <div>
        <h3>Bio</h3>
        <p>{props.user.bio}</p>
      </div>
    </div>
  );
}

export default Profile;
