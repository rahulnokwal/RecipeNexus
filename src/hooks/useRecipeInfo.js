import { useEffect, useState } from "react";

const useRecipeInfo = (recipe) => {
  const RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY;
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});

  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [currentOffset, setCurrentOffset] = useState(0);

  const [hasMore, setHasMore] = useState(true);

  const fetchRecipeData = async (isNewRecipe) => {
    try {
      if (isNewRecipe) {
        setErrorInfo(null);
        setLoading(true);
        setHasMore(true);
      } else {
        setIsLoadingMore(true);
      }

      const cachedKey = `chche_${recipe || "random"}`;
      if (isNewRecipe) {
        const cachedData = sessionStorage.getItem(cachedKey);
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setRecipeInfo(parsedData);
          setHasMore(parsedData.length === 8);
          setLoading(false);
          return;
        }
      }

      let fetch_url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&number=8&offset=${currentOffset}&instructionsRequired=true&addRecipeInformation=true&apiKey=${RECIPE_API_KEY}`;

      if (recipe === "") {
        fetch_url = `https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=${RECIPE_API_KEY}`;
      }

      const response = await fetch(fetch_url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong fetching the recipes.",
        );
      }
      const finalData = recipe === "" ? data.recipes : data.results;
      if (finalData.length < 8) {
        setHasMore(false);
      }
      if (isNewRecipe) {
        setRecipeInfo(finalData);
        sessionStorage.setItem(cachedKey, JSON.stringify(finalData));
      } else {
        setRecipeInfo((prev) => [...prev, ...finalData]);
      }
    } catch (error) {
      setErrorInfo(error);
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    setCurrentOffset(0);
    fetchRecipeData(true);
  }, [recipe]);

  useEffect(() => {
    if (currentOffset > 0 && hasMore) {
      fetchRecipeData(false);
    }
  }, [currentOffset]);

  const loadMore = () => {
    setCurrentOffset((prev) => prev + 8);
  };

  return {
    recipeInfo,
    errorInfo,
    loading,
    isLoadingMore,
    loadMore,
    hasMore,
  };
};

export default useRecipeInfo;
