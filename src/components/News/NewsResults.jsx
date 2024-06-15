import React from "react";
import NewsResult from "./NewsResult";

import { NEWS_DUMMY_DATA } from "../../assets/dummyData/newsArticleData";

function NewsResults({ isCompacted = false }) {
  // Which you will filter the results
  

  return (
    <div className="news-results-queue">
      {NEWS_DUMMY_DATA.map((news, i) => (
        <NewsResult key={i} newsData={news} isCompacted={isCompacted} />
      ))}
      ;
    </div>
  );
}

export default NewsResults;
