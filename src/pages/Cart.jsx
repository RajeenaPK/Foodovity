import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const { cart } = useContext(CartContext);
  console.log("Cart Items : ",cart)

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((meal, index) => (
              <li key={index}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                {meal.strMeal}
              </li>
            ))}
          </ul>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
