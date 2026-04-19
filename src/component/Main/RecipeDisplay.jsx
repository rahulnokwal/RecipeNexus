import { ArrowLeft, Heart } from "lucide-react";
import Title from "./Title.jsx";
import Video from "./Video.jsx";
import useAppContext from "../../context/useRecipeContext.jsx";
import { useNavigate } from "react-router-dom";
const RecipeDisplay = () => {
  const navigate = useNavigate();
  const { clickedRecipe, likedRecipe, setLikedRecipe } = useAppContext();

  const addLikedRecipe = () => {
    const isLiked = likedRecipe.some((item) => item.id === clickedRecipe.id);
    if (isLiked) return;
    setLikedRecipe((prev) => [...prev, clickedRecipe]);
  };
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    clickedRecipe && (
      <div className="w-full text-black relative">
        <div className="w-full rounded-lg relative">
          <div className="w-full absolute top-4 left-0 flex items-center justify-between px-6 ">
            <div className="bg-white/80 h-10 w-10 rounded-xl flex justify-center items-center">
              <ArrowLeft onClick={handleBack} />
            </div>
            <div className="bg-white/80 h-10 w-10 rounded-xl flex justify-center items-center text-red-600  hover:bg-red-500 hover:text-white transition-all duration-300">
              <Heart onClick={addLikedRecipe} />
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

        <div className="absolute top-3/5  rounded-3xl bg-linear-to-b from-white/10 from-0% to-5% to-white backdrop-blur-xs pt-15">
          <Title
            recipe={clickedRecipe}
            titleClass="text-2xl text-black"
            statsClass="my-4 text-[#C53030]"
          />
          <div className="flex flex-wrap gap-2 items-center justify-center my-2">
            {clickedRecipe.dishTypes.map((type, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-[#48BB78] text-xs text-white rounded-sm px-2 py-1"
                >
                  {type}
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-center">
            <p
              className="text-center text-sm max-w-xs tracking-tight leading-4"
              dangerouslySetInnerHTML={{ __html: clickedRecipe.summary }}
            ></p>
          </div>
          <div className="px-4 my-2">
            <h1 className="font-medium text-xl">Ingredients</h1>
            <ol className="px-4">
              {clickedRecipe.analyzedInstructions[0]?.steps?.map((val) =>
                val.ingredients?.map((item, idx) => (
                  <li key={idx} type="square">
                    {item.name}
                  </li>
                )),
              )}
            </ol>
          </div>
          <div className="px-4 my-2">
            <h1 className="font-medium text-xl">Directions</h1>
            <ol className="px-4">
              {clickedRecipe.analyzedInstructions[0]?.steps?.map((step) => (
                <li key={step.number} type="1">
                  {step.step}
                </li>
              ))}
            </ol>
          </div>
          <Video />
        </div>
      </div>
    )
  );
};

export default RecipeDisplay;
