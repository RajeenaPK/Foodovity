import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div className="container">
      <h1>Food Categories</h1>
      <div className="categories">
        {categories.map((cat) => (
          <div className="category-card" key={cat.idCategory}>
            <h2>{cat.strCategory}</h2>
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            <Link to={`/category/${cat.strCategory}`}>
              <button>View All</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
