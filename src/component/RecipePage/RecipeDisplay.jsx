import useAppContext from "../../context/useRecipeContext.jsx";
import Ingredients from "./Ingredients.jsx";
import InstructionList from "./InstructionList.jsx";
import RecipeDisplayHeader from "./RecipeDisplayHeader.jsx";
import RecipeDisplayInfo from "./RecipeDisplayInfo.jsx";
import Title from "../Main/Title.jsx";
import Video from "./Video.jsx";

const RecipeDisplay = () => {
  const { clickedRecipe } = useAppContext();

  return (
    clickedRecipe && (
      <div className="w-full text-black relative">
        <RecipeDisplayHeader />
        <div className="absolute top-3/5  rounded-3xl bg-linear-to-b from-white/10 from-0% to-5% to-white/90 op-blur-xs pt-15">
          <Title
            recipe={clickedRecipe}
            titleClass="text-2xl text-black"
            statsClass="my-4 text-[#C53030]"
          />
          <RecipeDisplayInfo />
          <Ingredients />
          <InstructionList />
          <Video />
        </div>
      </div>
    )
  );
};

export default RecipeDisplay;
