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
  likedRecipe: [],
  setLikedRecipe: () => {},
  loading: false,
  isLoadingMore: false,
  loadMore: () => {},
  hasMore: true,
});
export const ContextProvider = appContext.Provider;
const useAppContext = () => {
  return useContext(appContext);
};
export default useAppContext;
