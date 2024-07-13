import React from "react";

class Product extends React.Component {
  componentWillMount() {
    console.log("My component will mount");
  }
  render() {
    console.log("My component render");
    return <p>Hello from our Class Component</p>;
  }
  componentDidMount() {
    console.log("My component did mount?");
  }
}

export default Product;
