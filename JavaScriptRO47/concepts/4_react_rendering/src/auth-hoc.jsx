import React from "react";

// Tip: High Order Component (HOC)
const withAuthHoc = (WrapperComponent, DenyComponent) => {
  return function ProtectedCompoennt(props) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
      // Tip: Search in local storage if there is a logged user
      const session = localStorage.getItem("session");

      // Tip: Check if the session is true (exists)
      if (session) {
        // Tip: Declare that the user is authenticated
        setIsLoggedIn(true);
      }
    }, []);

    if (isLoggedIn) {
      return <WrapperComponent {...props} />;
    }

    return <DenyComponent />;
  };
};

export default withAuthHoc;
