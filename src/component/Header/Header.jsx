import React from "react";
import ReciNexusLogo from "./ReciNexusLogo";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 h-15 w-full bg-[#121417] px-4 border-b border-emerald-500 flex justify-between items-center">
      <div className="flex items-center gap-3 group cursor-pointer py-1.5">
        <div className="text-emerald-500 transition-transform group-hover:scale-110">
          <ReciNexusLogo size={36} />
        </div>
        <span className="text-2xl font-light tracking-tighter text-white font-['Outfit'] whitespace-nowrap">
          reci<span className="font-black text-emerald-600 mr-0.5">.</span>nexus
        </span>
      </div>
      <div className="h-8 w-8 rounded-lg overflow-hidden">
        <img
          className="h-full w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6ebDWMIWEOu1pvGQgq38gZpH3-DvZpKa80JQrUA8IQ&s"
          alt="logo"
        />
      </div>
    </div>
  );
};
export default Header;
