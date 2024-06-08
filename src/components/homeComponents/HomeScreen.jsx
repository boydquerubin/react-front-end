import React, { useEffect, useState } from "react";
import axios from "axios";
import AdBanner from "./AdBanner";
import RecipeContainer from "./RecipeContainer";

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
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <RecipeContainer recipes={recipes} />
    </div>
  );
};

export default HomeScreen;
