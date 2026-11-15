import ProductCard from "../components/ProductCard";

// list of products, each one is an object
const products = [
  { id: 1, name: "Sourdough Loaf", description: "Crusty bread with a soft inside.", price: 4.5, image: "/images/bread.svg" },
  { id: 2, name: "Butter Croissant", description: "Flaky pastry baked every morning.", price: 2.8, image: "/images/croissant.svg" },
  { id: 3, name: "Celebration Cake", description: "Sponge cake with cream and fruit.", price: 28, image: "/images/cake.svg" },
  { id: 4, name: "Glazed Doughnut", description: "Soft doughnut with a sweet glaze.", price: 1.9, image: "/images/doughnut.svg" },
];

function Products() {
  return (
    <div className="page">
      <h1>Our Bakes</h1>
      <div className="card-list">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
