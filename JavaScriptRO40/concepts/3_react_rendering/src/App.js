import Cart from "./components/cart";
import ProductList from "./components/product-list";

function App() {
  const products = [
    {
      id: 3000,
      image:
        "https://cdn20.avanticart.ro/motoemotion.ro/pictures/geaca-de-piele-dama-alpinestars-stella-gp-r-tech-air-compatible-71572-4.jpeg",
      name: "Manusi de piele sport Alpinestars SP-1 V2",
      price: 300,
    },
    {
      id: 3001,
      image:
        "https://cdn20.avanticart.ro/motoemotion.ro/pictures/geaca-de-piele-dama-alpinestars-stella-gp-r-tech-air-compatible-71572-4.jpeg",
      name: "Manusi de piele sport MT SP-1 V5",
      price: 400,
    },
    {
      id: 3002,
      name: "Casca Full-Face Scorpion",
      price: 200,
      image:
        "https://muzikercdn.com/uploads/products/16512/1651270/thumb_large_d_gallery_base_186581e6.jpg",
    },
  ];

  return (
    <div>
      <Cart />
      <ProductList products={products} />
    </div>
  );
}

export default App;
