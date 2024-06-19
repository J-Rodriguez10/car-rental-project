import { useContext, useState } from "react";

import NewsResults from "./NewsResults";
import Comments from "./Comments";
import { NewsContext } from "../../context/news-context";


function NewsFilterMenu() {

  // Get the context values for updating filter tags and current filters
  const { updateFilterTags, newsFilters } = useContext(NewsContext);

  // State to manage which UI display
  const [uiDisplay, setUiDisplay] = useState("popular");

  // List of tags available for filtering news
  const TAGS = ["auto", "car", "news", "oil", "toyota", "wordpress"];

  // Function to handle changes in UI display 
  function handleUiDisplayChange(newUiDisplay) {
    console.log("Updating the newUIDisplay", newUiDisplay);
    setUiDisplay(newUiDisplay);
  }

  // Function to handle clicking on a tag to update the filter tags
  function handleTagClick(newTag) {
    updateFilterTags(newTag);
  }

  // Function to toggle active tag class
  function getTagClassName(tag) {
    return `tag ${newsFilters.tags.includes(tag) && "tag-active"}`;
  }


  return (
    <section className="news-filter-menu">
      <div className="filter-menu-btns">
        {/* Buttons to switch between different UI displays */}
        <div
          onClick={() => handleUiDisplayChange("popular")}
          className="filter-btn"
        >
          Popular
        </div>
        <div
          onClick={() => handleUiDisplayChange("recent")}
          className="filter-btn"
        >
          Recent
        </div>
        <div
          onClick={() => handleUiDisplayChange("comments")}
          className="filter-btn"
        >
          Comments
        </div>
        <div
          onClick={() => handleUiDisplayChange("tags")}
          className="filter-btn"
        >
          Tags
        </div>
      </div>

      <div className="filter-menu-results">
        {/* Conditional rendering based on the current UI display */}
        {uiDisplay === "popular" && (
          <NewsResults isCompacted displayAmnt={3} sortType={"popular"} />
        )}

        {uiDisplay === "recent" && (
          <NewsResults isCompacted displayAmnt={3} sortType={"recent"} />
        )}

        {uiDisplay === "comments" && <Comments />}

        {uiDisplay === "tags" && (
          <div className="tags-menu">
            {/* Rendering tags and applying click handlers to update the filter tags */}
            <div
              onClick={() => handleTagClick(TAGS[0])}
              className={getTagClassName(TAGS[0])}
            >
              Auto
            </div>
            <div
              onClick={() => handleTagClick(TAGS[1])}
              className={getTagClassName(TAGS[1])}
            >
              Car
            </div>
            <div
              onClick={() => handleTagClick(TAGS[2])}
              className={getTagClassName(TAGS[2])}
            >
              News
            </div>
            <div
              onClick={() => handleTagClick(TAGS[3])}
              className={getTagClassName(TAGS[3])}
            >
              Oil
            </div>
            <div
              onClick={() => handleTagClick(TAGS[4])}
              className={getTagClassName(TAGS[4])}
            >
              Toyota
            </div>
            <div
              onClick={() => handleTagClick(TAGS[5])}
              className={getTagClassName(TAGS[5])}
            >
              Wordpress
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsFilterMenu;
