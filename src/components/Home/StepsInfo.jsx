import bgVideo from "../../assets/videos/carDealerBg.mp4";

import TransitionSVG from "../TransitionSVG";
import Step from "./Step";

import {
  magnifyingGlassSVG,
  locationCarSVG,
  creditCardsSVG,
  caretArrowSVG,
} from "../../assets/SVGs";
import DynamicHeader from "../DynamicHeader";

function StepsInfo() {
  return (
    <section className="steps-info-sect">
      {/* background video */}
      <video autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container steps-cont">
        {/* header */}
        <DynamicHeader header="How do our rentals work"   hasRedUnderline />

        {/* steps to order car rental */}
        <ul>
          <li>
            <Step icon={magnifyingGlassSVG} label="Find Car">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </Step>
          </li>

          <div className="next-step-svg">{caretArrowSVG}</div>

          <li>
            <Step icon={locationCarSVG} label="Select Location">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </Step>
          </li>

          <div className="next-step-svg">{caretArrowSVG}</div>

          <li>
            <Step icon={creditCardsSVG} label="Place Your Order">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </Step>
          </li>
        </ul>
      </div>

      <TransitionSVG placement="bottom-left" />
    </section>
  );
}

export default StepsInfo;
