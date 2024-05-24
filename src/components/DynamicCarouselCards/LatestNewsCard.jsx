function LatestNewsCard({ carouselData, carouselStyle }) {
  // destructuring data recieved from the DynamicCarousel Component
  const { coverImg, publishedDate, commentsAmnt, newsTitle, newsDescription } =
    carouselData;

  return (
    <li style={carouselStyle} className="latest-news-card">
      
      {/* image */}
      <div className="news-cover-img">
        <img
          src={coverImg}
          alt="Toyota Car Decline Overshadows Light-Truck Gain"
        />
      </div>

      {/* news information data */}
      <div className="news-info-cont">
        <div className="icons-list">
          <p className="published-date">{publishedDate}</p>
          <p className="comments-amount">{commentsAmnt}</p>

          {/* profile image */}
          <img src="https://secure.gravatar.com/avatar/?s=40&amp;d=mm&amp;r=g" />
        </div>

        <div className="news-info">
          <h5>{newsTitle}</h5>

          <p>{newsDescription}</p>
        </div>
      </div>
    </li>
  );
}

export default LatestNewsCard;
