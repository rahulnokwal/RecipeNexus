import { Outlet } from "react-router-dom";
import { useRef, useEffect } from "react";
import useAppContext from "../../context/useRecipeContext";
const OtherPage = () => {
  const { clickedRecipe } = useAppContext();
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    if (clickedRecipe && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [clickedRecipe]);
  return (
    <div
      id="scrollbar"
      ref={scrollContainerRef}
      className="relative top-15 left-0 h-[calc(100dvh-124px)] sm:h-[calc(100dvh-140px)] px-4 my-2 overflow-auto"
    >
      <Outlet />
    </div>
  );
};

export default OtherPage;
