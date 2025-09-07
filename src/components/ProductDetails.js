import { useParams } from "react-router-dom";

function ProductDetails({ products, addToCart, addToWishlist }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.name} width="200" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)} style={{ marginLeft: "10px" }}>
        Add to Wishlist
      </button>
    </div>
  );
}
export default ProductDetails;
