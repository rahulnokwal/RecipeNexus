import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./component/Main/HomePage.jsx";
import SearchDisplay from "./component/Main/SearchDisplay.jsx";
import RecipeDisplay from "./component/Main/RecipeDisplay.jsx";
import OtherPage from "./component/Main/OtherPage.jsx";
import LikedDisplay from "./component/Main/LikedDisplay.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="display" element={<OtherPage />}>
        <Route path="search" element={<SearchDisplay />} />
        <Route path="recipe" element={<RecipeDisplay />} />
        <Route path="likedrecipes" element={<LikedDisplay />} />
      </Route>
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
);
