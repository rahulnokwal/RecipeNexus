import React from "react";

export default function ErrorState({
  title = "Oops! Something went wrong.",
  message = "We couldn't load the recipes right now. Please try again later.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 mt-10 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-lg mx-auto text-center">
      <div className="w-24 h-24 mb-6 bg-red-50 rounded-full flex items-center justify-center text-red-500">
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>

      <p className="text-gray-500 mb-8 leading-relaxed">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Try Again
        </button>
      )}
    </div>
  );
}
