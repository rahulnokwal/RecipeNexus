import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title.jsx";
import ErrorState from "../ErrorPage/ErrorState.jsx";
import useAppContext from "../../context/useRecipeContext.jsx";
import SkeletonLoader from "../ErrorPage/SkeletonLoader.jsx";

const HomeDisplay = () => {
  const { recipeInfo, errorInfo, loading, setClickedRecipe } = useAppContext();
  const navigate = useNavigate();
  if (errorInfo) {
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
  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="space-y-2">
      <p className="text-white text-2xl font-medium capitalize">
        Hey Foodie,
        <span className="text-xl"> try this out...</span>
      </p>
      {recipeInfo.map((recipe) => (
        <div
          key={recipe.id}
          className="h-40 w-full p-2 rounded-lg bg-[#1e2125] border-2 border-white text-white flex"
          onClick={() => {
            setClickedRecipe(recipe);
            navigate("/display/recipe");
          }}
        >
          <img
            src={
              recipe.image ||
              "https://www.landsend.com/phttps://images.unsplash.com/photo-1531928351158-2f736078e0a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wdHklMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3Dps/static/assets/product-detail/images/sorry_image.jpg"
            }
            className="h-full w-1/2 rounded-lg"
          />
          <Title
            recipe={recipe}
            containerClass="w-1/2"
            titleClass="text-white text-xl line-clamp-3"
            statsClass="mt-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeDisplay;
