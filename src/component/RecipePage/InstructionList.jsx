import React from "react";
import useAppContext from "../../context/useRecipeContext.jsx";
const InstructionList = () => {
  const { clickedRecipe } = useAppContext();
  return (
    <div className="px-4 my-2">
      <h1 className="font-medium text-xl">Directions</h1>
      <ol className="px-4">
        {clickedRecipe.analyzedInstructions[0]?.steps?.map((step) => (
          <li key={step.number} type="1">
            {step.step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionList;
