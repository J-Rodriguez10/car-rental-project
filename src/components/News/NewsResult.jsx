import React from "react";

import { formatDate } from "../utilityFunctions";
import { IconEye } from "@tabler/icons-react";

function NewsResult({ newsData, isCompacted = false }) {
  // Destructuring the newsData
  const {
    articleImgURL,
    date,
    title,
    author,
    commentsAmnt,
    description,
    views,
    tags,
  } = newsData;

  function returnFormattedDateMarkup(date) {
    const abbreviatedMonths = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEPT",
      "NOV",
      "DEC",
    ];

    const dateObj = new Date(date);

    return (
      <p>
        <span>{dateObj.getDate()} </span>
        {abbreviatedMonths[dateObj.getMonth()]}
      </p>
    );
  }

  return (
    <>
      {isCompacted && (
        <div className="news-article-preview-small">
          <img src={articleImgURL} alt={title} />

          <div className="article-info">
            <h6>{title}</h6>
            <p>{formatDate(date)}</p>
          </div>
        </div>
      )}

      {!isCompacted && (
        <div className="news-article-preview">
          {/* Article Image */}
          <div className="article-img-cont">
            <img src={articleImgURL} alt={title} />
            <div className="date-icon">{returnFormattedDateMarkup(date)}</div>
          </div>

          {/* Article Info */}
          <div className="article-info">
            <h5>{title}</h5>

            <div className="sub-header">
              <p>
                By: <span>{author}</span>
              </p>
              <p>
                Comments: <span>{commentsAmnt}</span>
              </p>
              <p>
                <IconEye className="icon-eye" />
                <span>{views}</span>
              </p>
            </div>

            <div className="description">{description}</div>

            {/* Button */}
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      )}
    </>
  );
}

export default NewsResult;
