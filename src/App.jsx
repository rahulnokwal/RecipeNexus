import React, { useState } from "react";
import Header from "./component/Header/Header";
import HomePage from "./component/Main/HomePage";
import { ContextProvider } from "./context/useRecipeContext";
import useRecipeInfo from "./hooks/useRecipeInfo";
import useYoutubeInfo from "./hooks/useYoutubeInfo";
const App = () => {
  const [recipeSearch, setRecipeSearch] = useState("");
  const [clickedRecipe, setClickedRecipe] = useState("");
  const { recipeInfo, errorInfo } = useRecipeInfo(recipeSearch);
  const { recipeVideo, errorVideo } = useYoutubeInfo(clickedRecipe);
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
        <div className="w-sm h-full rounded-lg overflow-hidden relative">
          <Header />
          <HomePage />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
