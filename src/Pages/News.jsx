import { useState } from "react";

import DynamicHero from "../components/DynamicHero";
import NewsDisplayContainer from "../components/News/NewsDisplayContainer";
import NewsFilterMenu from "../components/News/NewsFilterMenu";
import Newsletter from "../components/News/Newsletter";

export const DEFAULT_NEWS_FILTERS = {
  tags: [],
  sortBy: "none",
};

function News() {
  const [newsFilters, setNewsFilters] = useState(DEFAULT_NEWS_FILTERS);

  function updateNewsFilters(key, newVal) {
    switch (key) {
      // Tags key
      case "tags":
        setNewsFilters((prevState) => {
          const updatedTagsArr = prevState.tags.includes(newVal)
            ? prevState.tags.filter((tag) => tag !== newVal)
            : [...prevState.tags, newVal];
          return {
            ...prevState,
            [key]: updatedTagsArr,
          };
        });
        break;

      // Simple key and value replacement 
      default:
        setNewsFilters((prevState) => ({
          ...prevState,
          [key]: newVal,
        }));
        break;
    }
  }

  console.log("THIS is the current state of the settings:", newsFilters);

  return (
    <section className="news-sect">
      <DynamicHero pageName="Auto News" />

      <div className="container news-page-cont">
        {/* News Results */}
        <div className="main-menu">
          <NewsDisplayContainer />
        </div>

        {/* Side Menu */}
        <aside className="side-menu">
          <Newsletter />
          <NewsFilterMenu />
        </aside>
      </div>
    </section>
  );
}

export default News;
