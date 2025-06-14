import DynamicButton from "../DynamicButton";
import { formatPrice } from "../utilityFunctions";

import { transmissionSVG, gasSVG, highwaySVG } from "../../assets/SVGs";

function RentalFleetCard({ carouselData, carouselStyle }) {
  // Destructuring data received from the DynamicCarousel Component
  const {
    imgSrc,
    name,
    attributes: attributesObj,
    perks: perksArr,
    price,
  } = carouselData;

  return (
    <li style={carouselStyle} className="rental-fleet-card">
      {/* Car rental image */}
      <div className="car-img-cont">
        <img src={imgSrc} alt={name} />
      </div>

      {/* Car rental info */}
      <div className="car-data-cont">
        {/* Header */}
        <div className="card-header">
          <h5>{name}</h5>

          <ul className="attr-list">
            <li>
              <div className="svg-cont">{highwaySVG}</div>
              <p>{attributesObj.mileage}</p>
            </li>

            <li>
              <div className="svg-cont">{gasSVG}</div>
              <p>{attributesObj.fuelType}</p>
            </li>

            <li>
              <div className="svg-cont">{transmissionSVG}</div>
              <p>{attributesObj.transmission}</p>
            </li>
          </ul>
        </div>

        {/* Perks list*/}
        <ul className="perks-list">
          {perksArr.map((perk, index) => (
            <li key={index}>{perk}</li>
          ))}
        </ul>

        {/* Card bottom portion */}
        <div className="card-bottom">
          <p>${formatPrice(price)}</p>

          <DynamicButton btnType="transparent">Rent It</DynamicButton>
        </div>
      </div>
    </li>
  );
}

export default RentalFleetCard;
