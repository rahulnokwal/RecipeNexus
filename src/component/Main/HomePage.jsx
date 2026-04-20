import HomeDisplay from "./HomeDisplay";
import InputSearch from "./InputSearch";
const HomePage = () => {
  return (
    <>
      <InputSearch />
      <div
        id="scrollbar"
        className="relative top-30 left-0 h-[calc(100dvh-184px)] sm:h-[calc(100dvh-200px)] px-4 my-2 overflow-auto"
      >
        <HomeDisplay />
      </div>
    </>
  );
};

export default HomePage;
