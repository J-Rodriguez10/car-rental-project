import CustomerReviewCard from "../DynamicCarouselCards/CustomerReviewCard"
import DynamicHeader from "../DynamicHeader"

function CustomerReviews() {

  return (
    <section className="customer-reviews-sect">
      <div className="container">

        <DynamicHeader header="Customer Reviews" headerColor="black" subtitle="Luxury Rental Services" ></DynamicHeader>

        <CustomerReviewCard />

        {/* <div className="placeholder">

        </div> */}


      </div>
    </section>
  )
}

export default CustomerReviews