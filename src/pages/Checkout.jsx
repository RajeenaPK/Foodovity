import { useState } from "react";
import "../styles/Checkout.css";

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {orderPlaced ? (
        <p>Order placed successfully!</p>
      ) : (
        <form onSubmit={handleCheckout}>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Address" required />
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
