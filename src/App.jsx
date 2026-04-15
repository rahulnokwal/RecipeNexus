import React from "react";
import Header from "./component/Header/Header";
import HomePage from "./component/Main/HomePage";

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-800 flex justify-center py-2">
      <div className="w-sm h-full rounded-lg overflow-hidden relative">
        <Header />
        <HomePage />
      </div>
    </div>
  );
};

export default App;
