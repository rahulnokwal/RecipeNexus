import React, { useState } from "react";
import Header from "./component/Header/Header";
import HomePage from "./component/Main/HomePage";
import { ContextProvider } from "./context/useRecipeContext";
import useRecipeInfo from "./hooks/useRecipeInfo";
import useYoutubeInfo from "./hooks/useYoutubeInfo";
import Navbar from "./component/Navbar/Navbar";
// import { recipe, yt } from "../data.js";
const App = () => {
  const [recipeSearch, setRecipeSearch] = useState("");
  const [clickedRecipe, setClickedRecipe] = useState(null);
  const { recipeInfo, errorInfo } = useRecipeInfo(recipeSearch);
  const { recipeVideo, errorVideo } = useYoutubeInfo(clickedRecipe);

  // temperary data for UI
  // let { recipeInfo, errorInfo } = useRecipeInfo(recipeSearch);
  // let { recipeVideo, errorVideo } = useYoutubeInfo(clickedRecipe);
  // recipeInfo = recipe;
  // recipeVideo = yt;

  return (
    <ContextProvider
      value={{
        recipeSearch,
        setRecipeSearch,
        clickedRecipe,
        setClickedRecipe,
        recipeInfo,
        errorInfo,
        recipeVideo,
        errorVideo,
      }}
    >
      <div className="w-screen h-screen bg-slate-800 flex justify-center py-2">
        <div className="w-sm h-full rounded-lg  relative bg-[#121417]">
          <Header />
          <HomePage />
          <Navbar />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
