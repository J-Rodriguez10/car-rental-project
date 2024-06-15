import React from "react";

import { formatDate } from "../utilityFunctions";
import DynamicButton from "../DynamicButton";
import { IconEye } from "@tabler/icons-react";

// export const NEWS_DUMMY_DATA = [
//   {
//     articleImgURL:
//       "https://autostar.pro-theme.info/wp-content/uploads/2016/10/137547772-150x150.jpg",
//     date: "2016-08-19",
//     title: "GM finds its balance with sales of pickups",
//     author: "Admin",
//     commentsAmnt: 3,
//     description:
//       "Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem pory.Utenim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exldolor in reprehenderit voluptate velit non proident sunt in culpa.",
//     views: 32,
//     tags: [],
//   },
// ];

function NewsResult({ newsData, isCompacted = false }) {
  console.log("Inside NewsResult:", newsData);
  // Destructuring
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
        <span>{dateObj.getDay()} </span>
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

            {/* button  */}
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      )}
    </>
  );
}

export default NewsResult;
