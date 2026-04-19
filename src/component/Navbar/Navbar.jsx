import { Heart, HomeIcon, Layers, CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../context/useRecipeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { setRecipeSearch } = useAppContext();
  return (
    <div className="absolute bottom-2 left-4 right-4 bg- text-white py-2 flex justify-evenly items-center rounded-2xl border">
      <HomeIcon
        onClick={() => {
          navigate("/");
          setRecipeSearch("");
        }}
      />
      <Heart onClick={() => navigate("display/likedrecipes")} />
      <Layers />
      <CircleUserRound />
    </div>
  );
};

export default Navbar;
