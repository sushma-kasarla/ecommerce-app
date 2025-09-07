import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import productsData from "./data/products.json";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load products once
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Cart functions
  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((p) => p.id !== id));
  const moveToWishlist = (product) => {
    removeFromCart(product.id);
    setWishlist([...wishlist, product]);
  };

  // Wishlist functions
  const addToWishlist = (product) => setWishlist([...wishlist, product]);
  const removeFromWishlist = (id) => setWishlist(wishlist.filter((p) => p.id !== id));
  const moveToCart = (product) => {
    removeFromWishlist(product.id);
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetails products={products} addToCart={addToCart} addToWishlist={addToWishlist} />}
        />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} moveToWishlist={moveToWishlist} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={moveToCart} />} />
      </Routes>
    </Router>
  );
}
export default App;
