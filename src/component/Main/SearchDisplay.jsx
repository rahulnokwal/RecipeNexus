import React from "react";
import useAppContext from "../../context/useRecipeContext.jsx";
import ErrorState from "./ErrorState.jsx";
const SearchDisplay = () => {
  const {
    recipeSearch,
    recipeInfo,
    errorInfo,
    clickedRecipe,
    setClickedRecipe,
  } = useAppContext();

  if (errorInfo) {
    return (
      <div className="p-4 w-full h-full flex items-center justify-center">
        <ErrorState
          title="Recipe Connection Error"
          message={errorInfo.Error}
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }
  if (recipeSearch && recipeInfo?.length === 0) {
    return (
      <div className="p-4 w-full h-full flex items-center justify-center">
        <ErrorState
          title="No Recipes Found"
          message={`We couldn't find any recipes for "${recipeSearch}". Try searching for a different ingredient!`}
        />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-2.5 justify-center">
      {recipeSearch &&
        !clickedRecipe &&
        recipeInfo.map((recipe) => (
          <div
            key={recipe.id}
            className="h-42 w-40 rounded-lg"
            onClick={() => setClickedRecipe(recipe)}
          >
            <img src={recipe.image} className="h-full w-full rounded-lg" />
            <div className="bg-white/40 h-full w-full rounded-lg -translate-y-full flex items-center justify-center backdrop-blur-xs px-2">
              <p className="text-center font-semibold text-black">
                {recipe.title}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchDisplay;
