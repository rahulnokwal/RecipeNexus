import React from "react";
import useAppContext from "../../context/useRecipeContext";
import ErrorState from "../ErrorPage/ErrorState";
import { useNavigate } from "react-router-dom";
import { HeartOff } from "lucide-react";
const LikedDisplay = () => {
  const navigate = useNavigate();
  const { likedRecipe, setLikedRecipe, setClickedRecipe } = useAppContext();

  const deleteLikedRecipe = (id) => {
    setLikedRecipe((prev) => prev.filter((reci) => reci && reci.id !== id));
  };

  if (likedRecipe && likedRecipe?.length === 0) {
    return (
      <div className="p-4 w-full h-full flex items-center justify-center">
        <ErrorState
          title="No Liked Recipes"
          message={`We couldn't find like recipes.`}
        />
      </div>
    );
  }
  return (
    <>
      <p className="text-white text-2xl font-medium capitalize my-2">
        What will you cook today?
      </p>
      <div className="space-y-4">
        {likedRecipe &&
          likedRecipe.map((recipe) => (
            <div
              key={recipe.id}
              className="h-76 w-full bg-white/40  rounded-3xl my-8 overflow-hidden relative shadow-lg shadow-emerald-600"
              onClick={() => {
                setClickedRecipe(recipe);
                navigate("../recipe");
              }}
            >
              <img
                src={recipe.image}
                className="h-full w-full rounded-lg object-center object-cover hover:scale-110 transition-all duration-300"
              />
              <div className="w-full  flex items-center justify-center px-2 absolute bottom-1 left-1">
                <p className="font-bold text-white text-lg leading-tight line-clamp-2 ">
                  {recipe.title}
                </p>
                <div
                  className="bg-white/80 text-red-600 p-2 rounded-lg ml-auto mr-2 hover:bg-red-500 hover:text-white transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteLikedRecipe(recipe.id);
                  }}
                >
                  <HeartOff />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default LikedDisplay;
