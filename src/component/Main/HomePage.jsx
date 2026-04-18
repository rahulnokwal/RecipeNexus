import React, { useRef, useEffect } from "react";
import SearchDisplay from "./SearchDisplay";
import HomeDisplay from "./HomeDisplay";
import RecipeDisplay from "./RecipeDisplay";
import useAppContext from "../../context/useRecipeContext";
const HomePage = () => {
  const { clickedRecipe } = useAppContext();
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    if (clickedRecipe && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [clickedRecipe]);
  return (
    <div
      ref={scrollContainerRef}
      id="scrollbar"
      className="relative top-30 left-0 h-[calc(100vh-200px)] px-4 my-2 overflow-auto"
    >
      <HomeDisplay />
      <SearchDisplay />
      <RecipeDisplay />
    </div>
  );
};

export default HomePage;
