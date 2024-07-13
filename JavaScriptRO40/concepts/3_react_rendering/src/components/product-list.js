import Product from "./product";

const ProductList = (props) => {
  // Products is an array of objects [{ name: '...', price: '...', image: '...' }]
  const { products } = props;

  return (
    <div>
      {/* <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Pantofi" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} />
      <Product name="Geanta" price={"200.00 LEI"} /> */}

      {/* List: Render multiple products of the same type  with unique key */}
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
