import React, { useEffect, useState } from "react";
import axios from "axios";
import AdBanner from "./AdBanner";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((response) => {
        setRecipes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  );
};

export default HomeScreen;
