const WithoutState = () => {
  // the react cannot watch the simple variable in order to update the UI
  let a = 2;
  a = 3;

  const handleClick = () => {
    console.log("Increment by 1");
    a = a + 1;
    console.log("a", a); // 4 on first increment
  };

  console.log("a outside fn: ", a); // will trigger only twice (2 when mounting)

  return (
    <div>
      <h1 style={{ padding: "20px" }}>{a}</h1>
      <button onClick={handleClick}>Increment by 1</button>
    </div>
  );
};

export default WithoutState;
