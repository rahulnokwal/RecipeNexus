import React from "react";
import Title from "./Title.jsx";
import ErrorState from "./ErrorState.jsx";
import useAppContext from "../../context/useRecipeContext.jsx";

const HomeDisplay = () => {
  const {
    recipeInfo,
    errorInfo,
    clickedRecipe,
    setClickedRecipe,
    recipeSearch,
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
  return (
    !recipeSearch &&
    recipeInfo &&
    !clickedRecipe && (
      <div className="space-y-2">
        <p className="text-white text-2xl font-medium capitalize">
          Recommendation
        </p>
        {recipeInfo.map((recipe) => (
          <div
            key={recipe.id}
            className="h-40 w-full p-2 rounded-lg bg-[#1e2125] border-2 border-white text-white flex"
            onClick={() => setClickedRecipe(recipe)}
          >
            <img src={`${recipe.image}`} className="h-full w-1/2 rounded-lg" />
            <Title
              recipe={recipe}
              containerClass="w-1/2"
              titleClass="text-white line-clamp-3"
              statsClass="mt-auto"
            />
          </div>
        ))}
      </div>
    )
  );
};

export default HomeDisplay;
