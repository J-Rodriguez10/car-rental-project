import React, { createContext, useState, useContext } from "react";

// Create a context for managing news filters
export const NewsContext = createContext({
  tags: [],
  sortBy: "none",
});

// Default filter settings
const DEFAULT_NEWS_FILTERS = {
  tags: [],
  sortBy: "none",
};

// Provider component
export default function NewsContextProvider({ children }) {

  // State to hold the current filter settings
  const [newsFilters, setNewsFilters] = useState(DEFAULT_NEWS_FILTERS);

  // Function to update the sort by setting
  function updateSortBySettings(newSortBy) {
    setNewsFilters((prevState) => ({
      ...prevState,
      sortBy: newSortBy,
    }));
  }

  // Function to update the tags filter
  function updateFilterTags(newTag) {
    setNewsFilters((prevState) => {
      const updatedTagsArr = prevState.tags.includes(newTag)
        ? prevState.tags.filter((tag) => tag !== newTag)
        : [...prevState.tags, newTag];
      return {
        ...prevState,
        tags: updatedTagsArr,
      };
    });
  }


  const ctxValue = {
    newsFilters, // Current filter settings
    updateSortBySettings, // Function to update sort by setting
    updateFilterTags, // Function to update tags filter
  };

  // Provide the context value to child components
  return (
    <NewsContext.Provider value={ctxValue}>{children}</NewsContext.Provider>
  );
}
