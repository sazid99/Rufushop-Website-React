import React from 'react';
import './Product.css'; // Importing the CSS file

function Product({ product }) {
  return (
    <div className="product-card shadow-lg">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="btn btn-primary add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
