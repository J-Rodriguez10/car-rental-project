import { useState } from "react";

import DynamicDoubleSlider from "../DynamicDoubleSlider";
import DynamicButton from "../DynamicButton";

import { DEFAULT_SETTINGS } from "./AutolistingContainer";

function FilterSidebar({ filterSettings, updateFilterSettings }) {

  const [sliderKeyIndex, setSliderKeysIndex] = useState(0);

  // Deriving data from state for the vehicle body selection UI
  const isSedanSelected = filterSettings.vehicleBodyType.includes("sedan");
  const isPickupSelected = filterSettings.vehicleBodyType.includes("pickup");
  const isSportsSelected = filterSettings.vehicleBodyType.includes("sports");

  // Activates when user changes calendar field
  function handleBookingTimeChange(pickUpOrDropOff, newBookingTime) {
    updateFilterSettings(pickUpOrDropOff, newBookingTime);
  }

  // Activates when user changes fuel type field
  function handleFuelTypeChange(newFuelType) {
    updateFilterSettings("fuelType", newFuelType);
  }

  // Activates when user selects an image from the vehicle body selection UI
  function handleImgClick(newBodyType) {
    updateFilterSettings("vehicleBodyType", newBodyType);
  }

  // Activates when user clicks on the reset button
  function handleResetButtonClick() {
    updateFilterSettings("reset");
    setSliderKeysIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <aside className="filter-sidebar">
      {/* Calendar Input */}
      <div className="filter-item">
        <label htmlFor="bookingTime">Booking Time</label>

        <input
          type="datetime-local"
          id="bookingTime"
          name="bookingTime"
          title="Pick-up date"
          value={filterSettings.bookingTime.pickUp}
          onChange={(e) => handleBookingTimeChange("pickUp", e.target.value)}
        />

        <input
          type="datetime-local"
          id="bookingTime"
          name="bookingTime"
          title="Drop-off date"
          value={filterSettings.bookingTime.dropOff}
          // value={filters.bookingTime}
          onChange={(e) => handleBookingTimeChange("dropOff", e.target.value)}
        />
      </div>

      {/* Year Slider */}
      <DynamicDoubleSlider
        key={`year-${sliderKeyIndex}`}
        headerText={"Year Range"}
        defaultValArr={DEFAULT_SETTINGS.yearRange}
        state={filterSettings}
        updateStateFunction={updateFilterSettings}
        stateKey={"yearRange"}
      />

      {/* Price Slider */}
      <DynamicDoubleSlider
        key={`price-${sliderKeyIndex}`}
        headerText={"Price Range"}
        defaultValArr={DEFAULT_SETTINGS.priceRange}
        state={filterSettings}
        updateStateFunction={updateFilterSettings}
        stateKey={"priceRange"}
      />

      {/* Vehicle Body Type Selector */}
      <div className="filter-item">
        <label htmlFor="bodyType">Vehicle Body Type</label>

        <div className="body-type-selection">
          {/* Sedan */}
          <div
            className={`img-wrapper ${isSedanSelected && "img-wrapper-active"}`}
            onClick={() => handleImgClick("sedan")}
          >
            <img
              src="https://autostar.pro-theme.info/wp-content/uploads/2018/12/18054365085a8e60bba5141338689408_0_0-1.jpg"
              alt="sedan type"
            />
          </div>

          {/* Pickup */}
          <div
            className={`img-wrapper ${
              isPickupSelected && "img-wrapper-active"
            }`}
            onClick={() => handleImgClick("pickup")}
          >
            <img
              src="https://autostar.pro-theme.info/wp-content/uploads/2018/12/4494977815b9b41fc38001632250464_0_0.jpg"
              alt="pickup type"
            />
          </div>
          {/* Sports */}
          <div
            className={`img-wrapper ${
              isSportsSelected && "img-wrapper-active"
            }`}
            onClick={() => handleImgClick("sports")}
          >
            <img
              src="https://autostar.pro-theme.info/wp-content/uploads/2018/12/2683357056f0ab41abef6173064588_0_0.jpg"
              alt="sports type"
            />
          </div>
        </div>
      </div>

      {/* Fuel Type Selector */}
      <div className="filter-item fuel-type">
        <label htmlFor="fuelType">Fuel Type</label>
        <select
          id="fuelType"
          onChange={(e) => handleFuelTypeChange(e.target.value)}
          value={filterSettings.fuelType}
        >
          <option value="all">All Fuel Types</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="hybrid">Hybrid</option>
          <option value="electric">Electric</option>
          <option value="petrol+cng">Petrol+CNG</option>
          <option value="lpg">LPG</option>
        </select>
      </div>

      {/* Engine Volume Slider */}
      <DynamicDoubleSlider
        key={`engine-volume-${sliderKeyIndex}`}
        headerText={"Engine Volume"}
        defaultValArr={DEFAULT_SETTINGS.engineVolumeRange}
        state={filterSettings}
        updateStateFunction={updateFilterSettings}
        stateKey={"engineVolumeRange"}
      />

      {/* Reset Button */}
      <div className="btn-cont" onClick={handleResetButtonClick}>
        <DynamicButton>Reset Filters</DynamicButton>
      </div>
    </aside>
  );
}

export default FilterSidebar;
