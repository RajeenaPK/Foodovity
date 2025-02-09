import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import FoodDetail from "./pages/FoodDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./App.css"
function App() {
  return (
<div >      
  <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/food/:id" element={<FoodDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
