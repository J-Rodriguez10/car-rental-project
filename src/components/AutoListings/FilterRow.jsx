function FilterRow({ filterSettings, updateFilterSettings }) {
  function updateAmountShownOnPage(updatedAmnt) {
    updateFilterSettings("resultsPerPage", updatedAmnt);
  }

  function handleSortPatternChange(newPattern) {
    updateFilterSettings("sortBy", newPattern);
  }

  function handleDisplayChange(newDisplay) {
    updateFilterSettings("displayLayout", newDisplay);
  }

  return (
    <div className="filter-row">
      {/* left side */}
      <div className="left">
        {/* display amount input */}
        <div className="filter-item">
          <label htmlFor="showOnPage">Show on page</label>
          <select
            onChange={(e) => updateAmountShownOnPage(e.target.value)}
            value={filterSettings.resultsPerPage}
            id="showOnPage"
            name="showOnPage"
          >
            <option value="10">10 Autos</option>
            <option value="20">20 Autos</option>
            <option value="50">50 Autos</option>
            <option value="-1">All Autos</option>
          </select>
        </div>

        {/* sort by input */}
        <div className="filter-item">
          <label htmlFor="sortBy">Sort by</label>
          <select
            onChange={(e) => handleSortPatternChange(e.target.value)}
            value={filterSettings.sortBy}
            id="sortBy"
            name="sortBy"
          >
            <option value="lastAdded">Last Added</option>
            <option value="firstAdded">First Added</option>
            <option value="cheapFirst">Cheap First</option>
            <option value="expFirst">Expensive First</option>
            <option value="makeA-Z">Make A - Z</option>
            <option value="makeZ-A">Make Z - A</option>
            <option value="oldFirst">Old First</option>
            <option value="newFirst">New First</option>
          </select>
        </div>
      </div>

      {/* right side */}
      <div className="right">
        {/* changes autolisting display to singular */}
        <div
          onClick={() => handleDisplayChange("singular")}
          className="row-display-btn btn"
        ></div>

        {/* changes autolisting display to grid */}
        <div
          onClick={() => handleDisplayChange("grid")}
          className="grid-display-btn btn"
        ></div>
      </div>
    </div>
  );
}

export default FilterRow;
