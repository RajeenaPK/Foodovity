import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/FoodDetail.css";

function FoodDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(meal, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000); // Hide message after 3 seconds
  };

  return meal ? (
    <div className="detail-container">
      {/* Image Section */}
      <div className="image-container">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>

      {/* Details Section */}
      <div className="details-container">
        <h1>{meal.strMeal}</h1>
        <p className="short-description">
          A delicious {meal.strMeal} dish. Perfect for any occasion!
        </p>
        <p className="price">Price: $15.99</p>

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Success Message */}
        {addedToCart && (
          <div className="cart-message">
            <p>Item added to cart!</p>
            <button className="view-cart" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        )}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default FoodDetail;
