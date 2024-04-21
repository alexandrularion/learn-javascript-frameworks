import Post from "./Post";

const PostList = (props) => {
  console.log(props); // { data: [...] }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      {props.data.map((post, index) => {
        return (
          <Post
            key={index}
            user={post.user}
            src={post.src}
            likes={post.likes}
          />
        );
      })}
    </div>
  );
};
export default PostList;
