import React, { createContext, useContext } from "react";

export const appContext = createContext({
  recipeSearch: "",
  setRecipeSearch: () => {},
  clickedRecipe: {},
  setClickedRecipe: () => {},
  recipeInfo: [],
  errorInfo: {},
  recipeVideo: [],
  errorVideo: {},
});
export const ContextProvider = appContext.Provider;
const useAppContext = () => {
  return useContext(appContext);
};
export default useAppContext;
