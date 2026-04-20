import { Outlet } from "react-router-dom";

const OtherPage = () => {
  return (
    <div
      id="scrollbar"
      className="relative top-15 left-0 h-[calc(100dvh-124px)] sm:h-[calc(100dvh-140px)] px-4 my-2 overflow-auto"
    >
      <Outlet />
    </div>
  );
};

export default OtherPage;
