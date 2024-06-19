import { useEffect, useState } from "react";

import NewsResult from "./NewsResult";
import { NEWS_DUMMY_DATA } from "../../assets/dummyData/newsArticleData";
import PaginationButtons from "./PaginationButtons";

function NewsResults({
  isCompacted = false, // Whether the news results should be displayed in a compact format
  sortType = undefined, // Sorting type for news results
  displayAmnt = undefined, // Number of news results to display per page
  tagsArr = [], // Array of tags to filter news results
  hasPaginationButtons = false, // Whether to display pagination buttons
}) {
  // State to hold the current pagination index
  const [btnIndex, setBtnIndex] = useState(0);

  // Reset the pagination index when tagsArr changes
  useEffect(() => {
    setBtnIndex(0);
  }, [tagsArr]);

  // Function to sort news results by the given sort type
  function sortNewsResultsBySortType(sortType) {
    const sortedData = [...NEWS_DUMMY_DATA];

    if (sortType === "popular") {
      return sortedData.sort((a, b) => b.views - a.views);
    } else if (sortType === "recent") {
      return sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      return sortedData;
    }
  }

  // Function to filter news results by tags
  function filterByTags(data, tagsArr) {
    if (!tagsArr || tagsArr.length === 0) {
      return data;
    }

    return data.filter((item) =>
      item.tags.some((tag) => tagsArr.includes(tag))
    );
  }

  // Function to partition data into chunks based on displayAmnt
  function partitionData(data, displayAmnt) {
    if (!displayAmnt || displayAmnt > data.length) {
      return [data];
    }

    const result = [];
    for (let i = 0; i < data.length; i += displayAmnt) {
      const chunk = data.slice(i, i + displayAmnt);
      result.push(chunk);
    }

    return result;
  }

  // Function to get the current page of data based on the pagination button index
  function filterByPaginationButton(partitionedData, pagBtnVal) {
    return partitionedData[pagBtnVal] || [];
  }

  // Refining data:
  // Step 1: Sort data based on the sort type
  const sortedData = sortNewsResultsBySortType(sortType);
  // Step 2: Filter data based on tags
  const filteredByTags = filterByTags(sortedData, tagsArr);
  // Step 3: Partition data into pages
  const partitionedData = partitionData(filteredByTags, displayAmnt);
  // Step 4: Get the data for the current page
  const refinedData = filterByPaginationButton(partitionedData, btnIndex);

  // Determine if pagination buttons should be displayed
  const shouldHavePagination = filteredByTags.length > displayAmnt;

  return (
    <div className="news-results-queue">
      {refinedData.map((news, i) => (
        <NewsResult key={i} newsData={news} isCompacted={isCompacted} />
      ))}
      {hasPaginationButtons && shouldHavePagination && (
        <PaginationButtons
          currIndex={btnIndex} // Current pagination index
          updateIndex={setBtnIndex} // Function to update the pagination index
          maxAmnt={partitionedData.length} // Total number of pages
        />
      )}
    </div>
  );
}

export default NewsResults;
