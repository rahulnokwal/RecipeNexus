import React, { useState } from "react";
import Header from "./component/Header/Header";
import HomePage from "./component/Main/HomePage";
import { ContextProvider } from "./context/useRecipeContext";
const App = () => {
  const [recipeSearch, setRecipeSearch] = useState("");
  console.log(recipeSearch);
  return (
    <ContextProvider value={{ recipeSearch, setRecipeSearch }}>
      <div className="w-screen h-screen bg-slate-800 flex justify-center py-2">
        <div className="w-sm h-full rounded-lg overflow-hidden relative">
          <Header />
          <HomePage />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
