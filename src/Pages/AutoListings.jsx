import AutolistingContainer from "../components/AutoListings/AutolistingContainer";
import DynamicHero from "../components/DynamicHero";

function AutoListings() {
  return (
    <>
      <DynamicHero pageName="Auto Listings" />
      <AutolistingContainer />
    </>
  );
}

export default AutoListings;
