import { useEffect, useState } from "react";
import { VITE_RECIPE_API_KEY } from "../../config.js";

const useRecipeInfo = (recipe) => {
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        setErrorInfo(null);
        setLoading(true);

        const cachedKey = `chche_${recipe || "random"}`;
        const cachedData = sessionStorage.getItem(cachedKey);
        if (cachedData) {
          setRecipeInfo(JSON.parse(cachedData));
          return;
        }

        let fetch_url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&number=8&instructionsRequired=true&addRecipeInformation=true&apiKey=${VITE_RECIPE_API_KEY}`;

        if (recipe === "") {
          fetch_url = `https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=${VITE_RECIPE_API_KEY}`;
        }

        const response = await fetch(fetch_url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Something went wrong fetching the recipes.",
          );
        }
        const finalData = recipe === "" ? data.recipes : data.results;
        setRecipeInfo(finalData);
        sessionStorage.setItem(cachedKey, JSON.stringify(finalData));
      } catch (error) {
        setErrorInfo(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeData();
  }, [recipe]);

  return { recipeInfo, errorInfo, loading };
};

export default useRecipeInfo;
