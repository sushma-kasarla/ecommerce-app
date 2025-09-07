import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#090a17ff", color: "black" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Products</Link>
      <Link to="/cart" style={{ margin: "10px", color: "white" }}>Cart</Link>
      <Link to="/wishlist" style={{ margin: "10px", color: "white" }}>Wishlist</Link>
    </nav>
  );
}
export default Navbar;
