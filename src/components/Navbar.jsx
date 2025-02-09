import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  console.log("Items : ",totalItems);

  return (
    <nav className="navbar">
      <Link to="/"><h1>Foodovity</h1></Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={24} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
