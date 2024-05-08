import DynamicHeader from "../DynamicHeader";

import { DUMMY_RENTAL_FLEETS } from "../../assets/dummyData/rentalFleetsData";
import RentalFleet from "../DynamicCarouselCards/RentalFleetCard";
import DynamicCarousel from "../DynamicCarousel";
import TransitionSVG from "../TransitionSVG";

function RentalFleets() {
  return (
    <section className="rental-fleets-sect">
      <div className="container rental-fleets-cont ">
        {/* header */}
        <DynamicHeader
          headerColor="black"
          header="Our Rental Fleets"
          subtitle="Luxury Rental Services"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          repellat magnam praesentium aliquid, quod ratione ea consequatur.
        </DynamicHeader>

        {/* rental fleets carousel */}
        <DynamicCarousel
          carouselDataArr={DUMMY_RENTAL_FLEETS}
          CarouselItem={RentalFleet}
          desktopConfigureObj={{ displayAmnt: 4, minWidth: 1000 }}
          mediumConfigureObj={{ displayAmnt: 3, minWidth: 550 }}
          mobileConfigureObj={{ displayAmnt: 1, minWidth: 0 }}
        />
      </div>

      <TransitionSVG placement="bottom-right" fill={"#F7F7F7"} />
    </section>
  );
}

export default RentalFleets;
