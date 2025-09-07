import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      {/* Store Name */}
      <h1 className="store-name">Electronics Store</h1>

      {/* Product List */}
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            {/* Product Image with divider */}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            {/* Product Info */}
            <div className="product-info">
              <p className="product-name">Name : {product.name}</p>
              <p className="product-price">Price : ${product.price}</p>
              <Link to={`/products/${product.id}`}>View Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
