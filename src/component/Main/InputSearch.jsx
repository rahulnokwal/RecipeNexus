import { useState } from "react";
import { Search } from "lucide-react";
import useAppContext from "../../context/useRecipeContext";
import { useNavigate } from "react-router-dom";
const InputSearch = () => {
  const navigate = useNavigate();
  const { setRecipeSearch } = useAppContext();
  const [inputValue, setInputValue] = useState("");

  function searchRecipe(e) {
    e.preventDefault();
    const recipe = inputValue.trim();
    console.log(recipe);
    if (recipe === "") return;
    setRecipeSearch(recipe);
    setInputValue("");
    navigate("display/search");
  }
  return (
    <form
      className="w-[calc(100%-32px)] absolute top-15 left-0 flex justify-center items-center  outline-none shadow-sm shadow-[#2E3339] bg-green-900 rounded-lg mt-4 mx-4"
      onSubmit={searchRecipe}
    >
      <input
        type="text"
        placeholder="Search by Ingredients"
        className="w-full pl-4 pr-1 py-2 rounded-l-lg bg-white/80 outline-none"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-emerald-500 text-white p-1 rounded-r-lg hover:bg-emerald-400"
      >
        <Search size={32} />
      </button>
    </form>
  );
};

export default InputSearch;
