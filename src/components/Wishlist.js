function Wishlist({ wishlist, removeFromWishlist, moveToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? <p>No items in wishlist</p> : null}
      {wishlist.map((item) => (
        <div key={item.id} style={{ margin: "10px 0" }}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromWishlist(item.id)} style={{ marginLeft: "10px" }}>
            Remove
          </button>
          <button onClick={() => moveToCart(item)} style={{ marginLeft: "10px" }}>
            Move to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
export default Wishlist;
