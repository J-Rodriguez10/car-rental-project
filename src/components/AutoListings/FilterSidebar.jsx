import DynamicDoubleSlider from "../DynamicDoubleSlider";

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <div className="filter-item">
        <label htmlFor="bookingTime">Booking Time</label>

        <input
          type="datetime-local"
          id="bookingTime"
          name="bookingTime"
          title="Pick-up date"
          // onChange={handleInputChange}
        />

        <input
          type="datetime-local"
          id="bookingTime"
          name="bookingTime"
          title="Drop-off date"
          // value={filters.bookingTime}
          // onChange={handleInputChange}
        />
      </div>

      <DynamicDoubleSlider
        headerText={"Year Range"}
        minVal={1950}
        maxVal={2024}
        defaultValArr={[1950, 2024]}
      />

      <DynamicDoubleSlider
        headerText={"Price Range"}
        minVal={0}
        maxVal={100000}
        defaultValArr={[0, 100000]}
      />
    </aside>
  );
}

export default FilterSidebar;
