function CustomerReviewCard({ carouselData, carouselStyle}) {
  const { customerImg, customerReview, customerName, occupation } =
    carouselData;


  return (
    <li style={carouselStyle} className="customer-review-card">
      {/* customer image */}
      <div className="customer-img-cont">
        <img src={customerImg} alt={customerName} />
      </div>

      {/* customer info */}
      <div className="customer-info">
        <div className="customer-quote">
          <p>{customerReview}</p>
        </div>

        <div className="customer-name">
          <p className="name">{customerName}</p>
          <p className="occupation">{occupation}</p>
        </div>
      </div>
    </li>
  );
}

export default CustomerReviewCard;
