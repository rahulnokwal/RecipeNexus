# 🍲 Recipe Nexus (ReciNexus)

A dynamic, fully-fledged frontend React application that allows users to discover trending recipes, search for specific meals, and watch guided video tutorials. Built with a heavy focus on performance, robust state management, and an exceptional user experience.

## ✨ Features

- **Smart Search & Discovery:** Fetches trending/random vegetarian recipes on load and allows for highly specific user searches via the Spoonacular API.
- **Integrated Video Tutorials:** Automatically pulls the most relevant YouTube tutorial for the selected recipe so users can watch while they cook.
- **Client-Side Caching Engine:** Implements advanced `sessionStorage` and `localStorage` caching to instantly load previous searches, drastically reducing API quota usage and eliminating "refresh amnesia."
- **Save to Favorites:** Users can "heart" recipes, saving them locally to their custom cookbook via the `LikedDisplay` interface.
- **Resilient UI/UX:** Features graceful error handling with custom empty states, and pulsing `SkeletonLoaders` to keep the UI feeling lightning-fast during asynchronous API calls.

## 🛠 Tech Stack

- **Framework:** React (via Vite)
- **Styling:** Tailwind CSS
- **State Management:** React Context API & Custom Hooks
- **APIs:** Spoonacular Recipe API, YouTube Data API v3
- **Storage:** Browser `localStorage` & `sessionStorage`

## 📂 Project Structure

A clean, modular, and component-driven architecture:

```text
src/
├── component/
│   ├── ErrorPage/        # Fallback UI and Skeleton loading states
│   ├── Header/           # App branding and ReciNexusLogo
│   ├── Main/             # Core layout grids, Home, Search, and Liked displays
│   ├── Navbar/           # Primary application navigation
│   └── RecipePage/       # Deep-dive recipe view (Ingredients, Instructions, Video)
├── context/
│   └── useRecipeContext.jsx  # Global state for active searches and selected recipes
└── hooks/
    ├── useRecipeInfo.js      # Unified hook for handling random/search API logic & caching
    └── useYoutubeInfo.js     # Hook for securely fetching YouTube tutorial data
```
