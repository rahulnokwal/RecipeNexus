import { Search } from "lucide-react";
import React, { useState } from "react";

const HomePage = () => {
  const [recipeSearch, setRecipeSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  function searchRecipe() {
    const recipe = inputValue.trim();
    if (recipe === "") return;
    setRecipeSearch(recipe);
    setInputValue("");
  }
  return (
    <div className="relative top-15 left-0 h-[calc(100vh-76px)] bg-[#121417] py-2 px-4">
      <div className="flex justify-center items-center  outline-none shadow-sm shadow-[#2E3339] rounded-lg my-2">
        <input
          type="text"
          placeholder="Search for Recipe"
          className="w-full pl-4 pr-1 py-2 rounded-l-lg bg-white/80 outline-none"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Search
          size={40}
          className="bg-emerald-500 text-white p-1 rounded-r-lg hover:bg-emerald-400"
          onClick={searchRecipe}
        />
      </div>
    </div>
  );
};

export default HomePage;
