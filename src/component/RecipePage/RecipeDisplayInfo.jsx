import React from "react";
import useAppContext from "../../context/useRecipeContext.jsx";
const RecipeDisplayInfo = () => {
  const { clickedRecipe } = useAppContext();
  return (
    <>
      <div className="flex flex-wrap gap-2 items-center justify-center my-2">
        {clickedRecipe.dishTypes.map((type, idx) => {
          return (
            <div
              key={idx}
              className="bg-[#48BB78] text-xs text-white rounded-sm px-2 py-1"
            >
              {type}
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <p
          className="text-center text-sm max-w-xs tracking-tight leading-4"
          dangerouslySetInnerHTML={{ __html: clickedRecipe.summary }}
        ></p>
      </div>
    </>
  );
};

export default RecipeDisplayInfo;
