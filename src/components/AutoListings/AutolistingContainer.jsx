import { useState } from "react";

import AutolistingResults from "./AutolistingResults";
import FilterRow from "./FilterRow";
import FilterSidebar from "./FilterSidebar";

export const DEFAULT_SETTINGS = {
  // Filters from FilterRow
  resultsPerPage: 10,
  sortBy: "lastAdded",
  displayLayout: "grid",

  // Filters from FilterSidebar.jsx
  bookingTime: {
    pickUp: "",
    dropOff: "",
  },
  yearRange: [1950, 2024],
  priceRange: [0, 1500],
  engineVolumeRange: [0, 7],
  vehicleBodyType: [],
  fuelType: "all",
};

function AutolistingContainer() {
  const [filterSettings, setFilterSettings] = useState(DEFAULT_SETTINGS);

  // Updates the filterSettings state given a proper key
  function updateFilterSettings(key, value = null) {
    console.log("I AM UPDATING STATE:", key, value);

    switch (key) {
      // Case 1: Adding or removing vehicle body type from the array
      case "vehicleBodyType":
        setFilterSettings((prevState) => {
          const updatedArr = prevState[key].includes(value)
            ? prevState[key].filter((bodyType) => bodyType !== value)
            : [...prevState[key], value];
          return {
            ...prevState,
            [key]: updatedArr,
          };
        });
        break;

      // Case 2: Resetting the filterSettings state
      case "reset":
        setFilterSettings(DEFAULT_SETTINGS);
        break;

      // Case 3: Updating the pick up or drop off state
      case "pickUp":
      case "dropOff":
        setFilterSettings((prevState) => {
          return {
            ...prevState,
            bookingTime: {
              ...prevState.bookingTime,
              [key]: value,
            },
          };
        });
        break;

      // Default Case: This s just a simple Key and Value replacement
      default:
        setFilterSettings((prevState) => {
          console.log("THIS IS PREV STATE", prevState);
          return {
            ...prevState,
            [key]: value,
          };
        });
        break;
    }
  }

  return (
    <section className="autolisting-sect">
      <div className="container">
        <div className="grouping">
          <FilterRow
            filterSettings={filterSettings}
            updateFilterSettings={updateFilterSettings}
          />
          <AutolistingResults filterSettings={filterSettings} />
        </div>

        <FilterSidebar
          filterSettings={filterSettings}
          updateFilterSettings={updateFilterSettings}
        />
      </div>
    </section>
  );
}

export default AutolistingContainer;
