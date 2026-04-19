import React, { useState, useEffect } from "react";
import { VIDEO_API_KEY } from "../../config.js";
const useYoutubeInfo = (recipe) => {
  const [recipeVideo, setRecipeVideo] = useState([]);
  const [errorVideo, setErrorVideo] = useState(null);
  useEffect(() => {
    const fetchRecipeVideo = async () => {
      try {
        setErrorVideo(null);
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${recipe.title}&type=video&videoDuration=medium&maxResults=1&key=${VIDEO_API_KEY}`,
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(
            data.message || "Something went wrong fetching the recipes.",
          );
        }
        setRecipeVideo(data.items);
      } catch (error) {
        setErrorVideo(error);
      }
    };
    fetchRecipeVideo();
  }, [recipe]);
  return { recipeVideo, errorVideo };
};

export default useYoutubeInfo;
