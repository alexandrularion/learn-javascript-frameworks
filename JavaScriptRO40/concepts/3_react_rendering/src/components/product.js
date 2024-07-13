const Product = (props) => {
  const { image, name, price } = props;
  return (
    <div>
      <img src={image} alt="Product" />
      <h1 style={price <= 200 ? { color: "red" } : {}}>{name}</h1>
      <p>{price}</p>
    </div>
  );
};

export default Product;
