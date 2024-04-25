import { thumbsUpSVG, ratingsSVG, mapSVG } from "../../assets/SVGs";
import DynamicHeader from "../DynamicHeader";

import Benefit from "./Benefit";

function OurBenefits() {
  return (
    <section>
      <div className="our-benefits container">

        <DynamicHeader header="Our Benefits" headerColor="black" subtitle="Luxury Rental Services"/>

        <ul>
          <li>
            <Benefit
              icon={thumbsUpSVG}
              label="Our Customers Always 100% Satisfied "
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              possimus dignissimos modi doloremque magni provident. Alias
              tempore
            </Benefit>
          </li>
          <li>
            <Benefit
              icon={ratingsSVG}
              label="We Provide Easier & Faster Bookings"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              possimus dignissimos modi doloremque magni provident. Alias
              tempore
            </Benefit>
          </li>
          <li>
            <Benefit icon={mapSVG} label="Your Choice of Any Pickup Location">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              possimus dignissimos modi doloremque magni provident. Alias
              tempore
            </Benefit>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default OurBenefits;
