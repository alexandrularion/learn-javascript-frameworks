const Post = (props) => {
  console.log(props); // { user: { name: "", email:"" }, src:"", likes: 30 }
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
        <button>Like</button>
      </div>
    </div>
  );
};
export default Post;
