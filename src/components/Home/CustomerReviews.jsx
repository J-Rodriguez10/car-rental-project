import CustomerReviewCard from "../DynamicCarouselCards/CustomerReviewCard";
import DynamicHeader from "../DynamicHeader";
import { DUMMY_CUSTOMER_REVIEWS } from "../../assets/dummyData/customerReviewData";
import DynamicCarousel from "../DynamicCarousel";
import TransitionSVG from "../TransitionSVG";

function CustomerReviews() {
  return (
    <section className="customer-reviews-sect" id="testimonials">
      <div className="container">
        {/* header */}
        <DynamicHeader
          header="Customer Reviews"
          headerColor="black"
          subtitle="Luxury Rental Services"
        />

        {/* customer review carousel */}
        <DynamicCarousel
          carouselDataArr={DUMMY_CUSTOMER_REVIEWS}
          CarouselItem={CustomerReviewCard}
          desktopConfigureObj={{ displayAmnt: 1, minWidth: 1000 }}
          mediumConfigureObj={{ displayAmnt: 1, minWidth: 1000 }}
          mobileConfigureObj={{ displayAmnt: 1, minWidth: 1000 }}
        />
      </div>

      {/* transition SVG */}
      <TransitionSVG placement="bottom-right" fill="#F7F7F7" />
    </section>
  );
}

export default CustomerReviews;
