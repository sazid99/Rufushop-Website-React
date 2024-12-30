import React, { useState } from "react";

function Cart() {
  // Sample cart data (this can be fetched or passed as props)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 30,
      quantity: 2,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    }
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text">Total: ${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="d-flex justify-content-between mb-4">
            <h4>Total Price: ${totalPrice}</h4>
            <button className="btn btn-success">Proceed to Checkout</button>
          </div>
        </>
      ) : (
        // Empty Cart Message
        <div className="text-center">
          <p>Your cart is currently empty.</p>
          <a href="/shop" className="btn btn-primary">Go to Shop</a>
        </div>
      )}
    </div>
  );
}

export default Cart;
