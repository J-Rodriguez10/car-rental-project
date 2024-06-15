import React, { useState } from "react";

import NewsResults from "./NewsResults";
import Comments from "./Comments";

function NewsFilterMenu() {
  const [uiDisplay, setUiDisplay] = useState("popular");

  function handleUiDisplayChange(newUiDisplay) {
    console.log("You clicked me");
    setUiDisplay(newUiDisplay);
  }

  console.log("This is the current state NewsFilterMenu:", uiDisplay);

  return (
    <section className="news-filter-menu">
      <div className="filter-menu-btns">
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
        {uiDisplay === "popular" && <NewsResults filters={null} isCompacted />}

        {uiDisplay === "recent" && <NewsResults filters={null}  isCompacted/>}

        {uiDisplay === "comments" && <Comments />}

        {uiDisplay === "tags" && (
          <div className="tags-menu">
            <div className="tag tag-active">Auto</div>
            <div className="tag">Car</div>
            <div className="tag">News</div>
            <div className="tag">Oil</div>
            <div className="tag">Toyota</div>
            <div className="tag">Wordpress</div>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsFilterMenu;
