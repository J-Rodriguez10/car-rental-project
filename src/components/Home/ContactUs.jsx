import DynamicHeader from "../DynamicHeader";

import {
  priceTagSVG,
  workerSVG,
  shieldSVG,
  twentyFourSevenSVG,
  phoneSVG,
} from "../../assets/SVGs";

function ContactUs() {
  return (
    <>
      {/* contact-us info */}
      <section className="contact-us-sect" id="about-us">
        <div className="contact-us-cont container-wide">
          <div className="contact-info">
            <DynamicHeader
              headerColor="black"
              header="Autostar Rental Service With a wide range of Vehicles"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              blanditiis officia culpa suscipit, assumenda qui dignissimos.
              Quam, reprehenderit nesciunt consequuntur, doloribus consequatur,
              velit reiciendis.
            </DynamicHeader>

            <ul className="contact-us-perks">
              <li>
                {priceTagSVG}
                <div className="perk-info">
                  <h5>Easy & Competitive Prices</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
              </li>

              <li>
                {workerSVG}
                <div className="perk-info">
                  <h5>Breakdown Assistance</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
              </li>

              <li>
                {shieldSVG}
                <div className="perk-info">
                  <h5>Trusted Rent Services</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
              </li>

              <li>
                {twentyFourSevenSVG}
                <div className="perk-info">
                  <h5>24/7 Free Customer Support</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-img-cont">
            <img
              src="https://autostar.pro-theme.info/wp-content/uploads/2024/02/2343245.png"
              alt="picture of happy customers"
            />
          </div>
        </div>
      </section>

      {/* contact us strip */}
      <div className="contact-us-info-strip" id="contact">
        <p>
          Call Today For Booking <span>Your Next Ride</span>
        </p>
        <div className="phone-number">
          {phoneSVG}
          <p>(999) 999 999</p>
        </div>
        <p className="bolden">Operators available 24/7</p>
      </div>
    </>
  );
}

export default ContactUs;
