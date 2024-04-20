import { useRef } from "react";

const Post = (props) => {
  console.log(props); // { user: { name: "", email:"" }, src:"", likes: 30 }

  // Create a reference to button element using the useRef hook
  const btnRef = useRef();

  // See the ref object in console
  console.log(btnRef); // { current: ... }

  const handleLike = (event) => {
    console.log(event); // { ... }

    // You can use or log props
    console.log(props);

    // You can log anything
    console.log("ai dat click pe butonul de like");

    // Update the button inner text using the reference
    btnRef.current.innerText = "Loading...";

    // Simulate a HTTP request and change the button inner text back to "Like"
    setTimeout(() => {
      btnRef.current.innerText = "Like";
    }, 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "500px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h1 style={{ fontSize: "20px" }}>{props.user?.name}</h1>
        <p style={{ fontSize: "16px" }}>{props.user?.email}</p>
      </div>
      <img src={props.src} alt={"Post"} />
      <div>
        {props.likes > 0 ? (
          <p>
            {props.likes} {props.likes > 1 ? "likes" : "like"}
          </p>
        ) : null}
        {/* Adding the ref to the button using ref attribute */}
        <button ref={btnRef} onClick={handleLike}>
          Like
        </button>
      </div>
    </div>
  );
};
export default Post;
