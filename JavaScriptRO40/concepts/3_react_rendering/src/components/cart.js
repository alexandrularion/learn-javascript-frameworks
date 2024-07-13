import React from "react";

const Cart = () => {
  const headingRef = React.useRef(null);

  const handleClick = () => {
    headingRef.current.innerText = "Error! Cannot continue";
    headingRef.current.style.color = "red";
  };

  return (
    <div>
      <h2 ref={headingRef}>Your cart is empty!</h2>
      <button onClick={handleClick}>Continue to checkout</button>
    </div>
  );
};
export default Cart;
