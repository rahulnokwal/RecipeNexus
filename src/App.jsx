import React, { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import { ContextProvider } from "./context/useRecipeContext";
import useRecipeInfo from "./hooks/useRecipeInfo";
import useYoutubeInfo from "./hooks/useYoutubeInfo";
import Navbar from "./component/Navbar/Navbar";
import { recipe, yt } from "../data.js";
import { Outlet } from "react-router-dom";
const App = () => {
  const [recipeSearch, setRecipeSearch] = useState("");

  const [clickedRecipe, setClickedRecipe] = useState(() => {
    const recipe = localStorage.getItem("clickedRecipe");
    return recipe ? JSON.parse(recipe) : null;
  });

  useEffect(() => {
    localStorage.setItem("clickedRecipe", JSON.stringify(clickedRecipe));
  }, [clickedRecipe]);

  const { recipeInfo, errorInfo, loading } = useRecipeInfo(recipeSearch);
  const { recipeVideo, errorVideo } = useYoutubeInfo(clickedRecipe);

  const [likedRecipe, setLikedRecipe] = useState(() => {
    let recipe = localStorage.getItem("likedRecipes");
    return recipe ? JSON.parse(recipe) : [];
  });
  useEffect(() => {
    localStorage.setItem("likedRecipes", JSON.stringify(likedRecipe));
  }, [likedRecipe]);

  // temperary data for UI
  // let recipeInfo = recipe;
  // let recipeVideo = yt;
  // let errorInfo, errorVideo;

  return (
    <ContextProvider
      value={{
        recipeSearch,
        setRecipeSearch,
        clickedRecipe,
        setClickedRecipe,
        recipeInfo,
        errorInfo,
        loading,
        recipeVideo,
        errorVideo,
        likedRecipe,
        setLikedRecipe,
      }}
    >
      <div className="w-screen h-screen bg-slate-800 flex justify-center py-2">
        <div className="w-sm h-full rounded-lg  relative bg-[#121417]">
          <Header />
          <Outlet />
          <Navbar />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
