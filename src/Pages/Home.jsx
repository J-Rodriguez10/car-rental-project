import AppDetails from "../components/Home/AppDetails";
import ContactUs from "../components/Home/ContactUs";
import CustomerReviews from "../components/Home/CustomerReviews";
import FleetsGallery from "../components/Home/FleetsGallery";
import Hero from "../components/Home/Hero";
import LatestNews from "../components/Home/LatestNews";
import OurBenefits from "../components/Home/OurBenefits";
import RentalFleets from "../components/Home/RentalFleets";
import StepsInfo from "../components/Home/StepsInfo";


function Home() {
  return (
    <>
      <Hero />
      <OurBenefits />
      <StepsInfo />
      <RentalFleets />
      <ContactUs />
      <FleetsGallery />
      <CustomerReviews />
      <LatestNews />
      <AppDetails/>


      {/* scroll */}
      <div className="scroll"></div>
    </>
  );
}

export default Home;
