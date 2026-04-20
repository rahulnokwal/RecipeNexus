import React from "react";
import useAppContext from "../../context/useRecipeContext.jsx";
import ErrorState from "../ErrorPage/ErrorState.jsx";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../ErrorPage/SkeletonLoader.jsx";
const SearchDisplay = () => {
  const navigate = useNavigate();
  const { recipeSearch, recipeInfo, loading, errorInfo, setClickedRecipe } =
    useAppContext();

  if (loading) {
    return <SkeletonLoader />;
  }

  if (recipeSearch && errorInfo) {
    return (
      <div className="p-4 w-full h-full flex items-center justify-center">
        <ErrorState
          title="Recipe Connection Error"
          message={errorInfo.message}
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
    <>
      <p className="text-white text-2xl font-medium capitalize my-2">
        Your recipe with {recipeSearch}
      </p>
      <div className="grid grid-cols-2 gap-2 justify-center">
        {recipeInfo.map((recipe) => (
          <div
            key={recipe.id}
            className="h-44 rounded-lg"
            onClick={() => {
              setClickedRecipe(recipe);
              navigate("../recipe");
            }}
          >
            <img
              src={
                recipe.image ||
                "https://www.landsend.com/pphttps://images.unsplash.com/photo-1531928351158-2f736078e0a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wdHklMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3Ds/static/assets/product-detail/images/sorry_image.jpg"
              }
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="bg-white/40 h-full w-full rounded-lg -translate-y-full flex items-center justify-center backdrop-blur-xs px-2">
              <p className="text-center font-semibold text-black">
                {recipe.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchDisplay;
