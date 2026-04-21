import { Outlet, useNavigationType, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import useAppContext from "../../context/useRecipeContext";
const OtherPage = () => {
  const navtype = useNavigationType();

  const scrollContainerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    if (navtype == "POP") {
      const savedPosition = JSON.parse(sessionStorage.getItem("savedPosition"));
      if (savedPosition) {
        scrollContainerRef.current.scrollTo({
          top: savedPosition,
          behavior: "instant",
        });
      }
    }
    if (location.pathname.includes("recipe")) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "auto",
      });
    } else {
    }
  }, [location.pathname, navtype]);

  const handelScroll = (e) => {
    if (!location.pathname.includes("recipe")) {
      sessionStorage.setItem(
        "savedPosition",
        JSON.stringify(e.target.scrollTop),
      );
    }
  };

  return (
    <div
      id="scrollbar"
      ref={scrollContainerRef}
      onScroll={handelScroll}
      className="relative top-15 left-0 h-[calc(100dvh-124px)] sm:h-[calc(100dvh-140px)] px-4 my-2 overflow-auto"
    >
      <Outlet />
    </div>
  );
};

export default OtherPage;
