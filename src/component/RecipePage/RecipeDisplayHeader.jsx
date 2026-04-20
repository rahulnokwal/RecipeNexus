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
          clickedRecipe.imageType === ""
            ? "https://www.landsend.com/phttps://images.unsplash.com/photo-1531928351158-2f736078e0a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wdHklMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3Dps/static/assets/product-detail/images/sorry_image.jpg"
            : clickedRecipe.image
        }
        alt={clickedRecipe.title}
      />
    </div>
  );
};

export default RecipeDisplayHeader;
