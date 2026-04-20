import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin shadow-md"></div>
    </div>
  );
};

export default LoadingSpinner;
