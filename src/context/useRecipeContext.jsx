import React, { createContext, useContext } from "react";

export const appContext = createContext({
  recipeSearch: "",
  setRecipeSearch: () => {},
});
export const ContextProvider = appContext.Provider;
const useAppContext = () => {
  return useContext(appContext);
};
export default useAppContext;
