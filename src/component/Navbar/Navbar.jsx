import { Heart, HomeIcon, Layers, CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-2 left-4 right-4 bg- text-white py-2 flex justify-evenly items-center rounded-2xl border">
      <HomeIcon onClick={() => navigate("/")} />
      <Heart onClick={() => navigate("display/likedrecipes")} />
      <Layers />
      <CircleUserRound />
    </div>
  );
};

export default Navbar;
