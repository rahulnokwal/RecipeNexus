import React, { useEffect, useState } from "react";
import { RECIPE_API_KEY, VIDEO_API_KEY } from "../../config.js";

const useRecipeInfo = (recipe) => {
  const [recipeInfo, setRecipeInfo] = useState();
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&number=10&addRecipeInformation=true&apiKey=${RECIPE_API_KEY}`,
        );
        const data = await response.json();
        setRecipeInfo(data.results);
      } catch (error) {
        setErrorInfo(error.message);
      }
    };
    fetchRecipeData();
  }, [recipe]);
  return { recipeInfo, errorInfo };
};

export default useRecipeInfo;
