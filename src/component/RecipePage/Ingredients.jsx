import React from "react";
import useAppContext from "../../context/useRecipeContext.jsx";

const Ingredients = () => {
  const { clickedRecipe } = useAppContext();
  return (
    <div className="px-4 my-2">
      <h1 className="font-medium text-xl">Ingredients</h1>
      <ol className="px-4">
        {clickedRecipe.analyzedInstructions[0]?.steps?.map((val) =>
          val.ingredients?.map((item, idx) => (
            <li key={idx} type="square">
              {item.name}
            </li>
          )),
        )}
      </ol>
    </div>
  );
};

export default Ingredients;
