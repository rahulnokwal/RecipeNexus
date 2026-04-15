import React, { useState } from "react";
import { Search } from "lucide-react";
import useAppContext from "../../context/useRecipeContext";
const InputSearch = () => {
  const { setRecipeSearch } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  function searchRecipe() {
    const recipe = inputValue.trim();
    if (recipe === "") return;
    setRecipeSearch(recipe);
    setInputValue("");
  }
  return (
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
  );
};

export default InputSearch;
