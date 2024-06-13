import { DUMMY_RENTAL_FLEETS } from "../../assets/dummyData/rentalFleetsData";
import RentalFleetCard from "../DynamicCarouselCards/RentalFleetCard";

function AutolistingResults({ filterSettings }) {

  // Applies filters to the rental data
  function applyFilters(rentalFleetsData) {
    return rentalFleetsData.filter((fleet) => {
      // Checking if year is within range
      const isYearInRange =
        filterSettings.yearRange[0] <= fleet.year &&
        fleet.year <= filterSettings.yearRange[1];

      // Checking if price is within range
      const isPriceInRange =
        filterSettings.priceRange[0] <= fleet.price &&
        fleet.price <= filterSettings.priceRange[1];

      // Checking if engine volume is within range
      const isEngineVolumeInRange =
        filterSettings.engineVolumeRange[0] <= fleet.engineVolume &&
        fleet.engineVolume <= filterSettings.engineVolumeRange[1];

      // Checking if fleet's fuel type matches the filter settings
      const isFuelTypeMatching =
        filterSettings.fuelType === "all" ||
        fleet.attributes.fuelType === filterSettings.fuelType;

      // Checking if fleet's body type is included in the filter settings
      const isVehicleBodyTypeIncluded =
        filterSettings.vehicleBodyType.length === 0 ||
        filterSettings.vehicleBodyType.includes(fleet.vehicleBodyType);

      return (
        isYearInRange &&
        isPriceInRange &&
        isEngineVolumeInRange &&
        isFuelTypeMatching &&
        isVehicleBodyTypeIncluded
      );
    });
  }

  // Sorts the rental fleets array 
  function applySortSettings(fleetsArr, sortType) {
    switch (sortType) {
      case "lastAdded":
        return fleetsArr.sort((a, b) => new Date(b.date) - new Date(a.date));

      case "firstAdded":
        return fleetsArr.sort((a, b) => new Date(a.date) - new Date(b.date));

      case "cheapFirst":
        return fleetsArr.sort((a, b) => a.price - b.price);

      case "expFirst":
        return fleetsArr.sort((a, b) => b.price - a.price);

      case "makeA-Z":
        return fleetsArr.sort((a, b) => a.name.localeCompare(b.name));

      case "makeZ-A":
        return fleetsArr.sort((a, b) => b.name.localeCompare(a.name));

      case "oldFirst":
        return fleetsArr.sort((a, b) => a.year - b.year);

      case "newFirst":
        return fleetsArr.sort((a, b) => b.year - a.year);

      default:
        return fleetsArr;
    }
  }

  // Filters and sorts the rental fleets data
  const filteredData = applyFilters(DUMMY_RENTAL_FLEETS);
  const sortedAndFilteredData = applySortSettings(
    filteredData,
    filterSettings.sortBy
  );

  return (
    <section className="autolisting-res-sect">
      <div className={`layout-${filterSettings.displayLayout}`}>
        {sortedAndFilteredData.map((fleet, i) => (
          <RentalFleetCard
            key={i}
            carouselData={fleet}
            carouselStyle={undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default AutolistingResults;
