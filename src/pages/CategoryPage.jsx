import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        setMeals(response.data.meals || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setLoading(false);
      });
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="category-container">
      <h1>{category} Meals</h1>
      {loading && <p>Loading...</p>}
      <div className="meals-grid">
        {meals.slice(0, page * 6).map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <Link to={`/food/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
              <p>A delicious {meal.strMeal} meal from the {category} category.</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
