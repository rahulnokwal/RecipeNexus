import React from "react";
import useAppContext from "../../context/useRecipeContext.jsx";
import ErrorState from "../ErrorPage/ErrorState.jsx";
const Video = () => {
  const { recipeVideo, errorVideo } = useAppContext();
  if (errorVideo) {
    return (
      <div className="p-4 w-full h-full flex items-center justify-center">
        <ErrorState
          title="Recipe Video Error"
          message={errorVideo.message}
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }
  return (
    recipeVideo && (
      <div className="flex flex-col justify-center items-center my-4 w-full px-4">
        <h1 className="font-medium text-xl my-2">Video Tutorial</h1>
        <iframe
          className="w-full max-w-3xl aspect-video rounded-xl shadow-lg"
          src={`https://www.youtube.com/embed/${recipeVideo[0]?.id?.videoId}?rel=0`}
          title="YouTube Recipe Tutorial"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    )
  );
};

export default Video;
