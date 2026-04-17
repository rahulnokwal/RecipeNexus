import { Heart, HomeIcon, Layers, CircleUserRound } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute bottom-2 left-4 right-4 bg- text-white py-2 flex justify-evenly items-center rounded-2xl border">
      <HomeIcon />
      <Heart />
      <Layers />
      <CircleUserRound />
    </div>
  );
};

export default Navbar;
