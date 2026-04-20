import { Clock, CookingPot } from "lucide-react";

const Title = ({
  recipe,
  containerClass = "",
  titleClass = "",
  statsClass = "",
}) => {
  return (
    <div className={`flex flex-col  px-2 ${containerClass}`}>
      <h1 className={`font-bold ${titleClass}`}>{recipe.title}</h1>

      <div className={`flex justify-center gap-4 ${statsClass}`}>
        <div className="flex items-center gap-2">
          <Clock />
          <p className="text-center">
            {recipe.readyInMinutes} <span>min</span>
          </p>
        </div>
        <div className="flex items-center justify-evenly gap-2">
          <CookingPot />
          <p className="text-center">
            {recipe.servings} <span>serve</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
