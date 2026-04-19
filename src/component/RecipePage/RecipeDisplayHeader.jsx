import useAppContext from "../../context/useRecipeContext.jsx";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
const RecipeDisplayHeader = () => {
  const navigate = useNavigate();
  const { clickedRecipe, likedRecipe, setLikedRecipe } = useAppContext();

  const isLiked = likedRecipe.some((item) => item.id === clickedRecipe.id);

  const toggleLikedRecipes = (id) => {
    if (isLiked) {
      setLikedRecipe((prev) => prev.filter((reci) => reci && reci.id !== id));
    } else {
      setLikedRecipe((prev) => [...prev, clickedRecipe]);
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="w-full rounded-lg relative">
      <div className="w-full absolute top-4 left-0 flex items-center justify-between px-6 ">
        <div
          className="bg-white/80 h-10 w-10 rounded-xl flex justify-center items-center"
          onClick={handleBack}
        >
          <ArrowLeft />
        </div>
        <div
          className="bg-white/80 h-10 w-10 rounded-xl flex justify-center items-center text-red-600  transition-all duration-300"
          onClick={() => toggleLikedRecipes(clickedRecipe.id)}
        >
          <Heart
            fill={isLiked ? "red" : "transparent"}
            color={isLiked ? "red" : "black"}
          />
        </div>
      </div>
      <img
        className="w-full rounded-lg object-cover"
        src={
          clickedRecipe.image ||
          "https://www.landsend.com/pps/static/assets/product-detail/images/sorry_image.jpg"
        }
        alt={clickedRecipe.title}
      />
    </div>
  );
};

export default RecipeDisplayHeader;
