import React from "react";

const useYoutubeInfo = (recipe) => {
  const [recipeVideo, setRecipeVideo] = useState();
  const [errorVideo, setErrorVideo] = useState(null);
  useEffect(() => {
    fetchRecipeData();
    const fetchRecipeVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${recipe}&type=video&videoDuration=medium&maxResults=1&key=${VIDEO_API_KEY}`,
        );
        const data = await response.json();
        setRecipeVideo(data);
      } catch (error) {
        setErrorVideo(error.message);
      }
    };
    fetchRecipeVideo();
  }, [recipe]);
  return { recipeVideo, errorVideo };
};

export default useYoutubeInfo;
