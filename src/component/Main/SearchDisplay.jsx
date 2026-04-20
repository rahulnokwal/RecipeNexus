import React, { useEffect } from "react";
import useAppContext from "../../context/useRecipeContext.jsx";
import ErrorState from "../ErrorPage/ErrorState.jsx";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import SkeletonLoader from "../ErrorPage/SkeletonLoader.jsx";
import LoadingSpinner from "../ErrorPage/LoadingSpinner.jsx";
const SearchDisplay = () => {
  const navigate = useNavigate();
  const {
    recipeSearch,
    recipeInfo,
    loading,
    errorInfo,
    setClickedRecipe,
    isLoadingMore,
    loadMore,
    hasMore,
  } = useAppContext();

  const observeEnd = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoadingMore &&
          recipeInfo.length > 0
        ) {
          loadMore();
        }
      },
      { threshold: 1.0 },
    );
    if (observeEnd.current) observer.observe(observeEnd.current);
    return () => {
      if (observeEnd.current) observer.unobserve(observeEnd.current);
    };
  }, [observeEnd, isLoadingMore, recipeInfo.length]);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (recipeSearch && !recipeInfo && errorInfo) {
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
                recipe.imageType === ""
                  ? "https://www.landsend.com/phttps://images.unsplash.com/photo-1531928351158-2f736078e0a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wdHklMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3Dps/static/assets/product-detail/images/sorry_image.jpg"
                  : recipe.image
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
      {
        <div
          ref={observeEnd}
          className="h-10 w-full flex flex-col justify-center items-center mt-4"
        >
          {isLoadingMore && <LoadingSpinner />}
          {!hasMore && (
            <p className="text-white text-sm font-medium">
              You've reached the end of the recipes!
            </p>
          )}
        </div>
      }
    </>
  );
};

export default SearchDisplay;
