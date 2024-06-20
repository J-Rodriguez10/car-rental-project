import { useContext } from "react";

import NewsResults from "./NewsResults";
import { NewsContext } from "../../context/news-context";

function NewsDisplayContainer() {
  const { newsFilters } = useContext(NewsContext);

  return (
    <div className="news-queue">
      <NewsResults
        displayAmnt={4}
        hasPaginationButtons
        tagsArr={newsFilters.tags}
      />
    </div>
  );
}

export default NewsDisplayContainer;
