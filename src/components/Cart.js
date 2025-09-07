function Cart({ cart, removeFromCart, moveToWishlist }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart</p> : null}
      {cart.map((item) => (
        <div key={item.id} style={{ margin: "10px 0" }}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>
            Remove
          </button>
          <button onClick={() => moveToWishlist(item)} style={{ marginLeft: "10px" }}>
            Move to Wishlist
          </button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
export default Cart;
