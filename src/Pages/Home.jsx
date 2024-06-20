import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
  const [hash, setHash] = useState("");
  const location = useLocation();

  // These useEffects are for same page scrolling when the URL changes:

  useEffect(() => {
    // Extract hash from location object
    const newHash = location.hash.substring(1);
    setHash(newHash);
  }, [location.hash]); // Trigger effect when hash in location changes

  useEffect(() => {
    console.log("Hash for the home page:", hash);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const yOffset = 0; // Offset if necessary
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        console.log("Scrolling to Y:", y);
        window.scrollTo({ top: y, behavior: "auto" });
      }
    }
  }, [hash]); // Trigger scroll effect when hash changes

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
      <AppDetails />
    </>
  );
}

export default Home;
