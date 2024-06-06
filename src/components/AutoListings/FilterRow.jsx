function FilterRow() {
  return (
    <div className="filter-row">
      <div className="left">
        <div className="filter-item">
          <label htmlFor="showOnPage">Show on page</label>
          <select id="showOnPage" name="showOnPage">
            <option value="10">10 Autos</option>
            <option value="20">20 Autos</option>
            <option value="50">50 Autos</option>
            <option value="all">All Autos</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="sortBy">Sort by</label>
          <select id="sortBy" name="sortBy">
            <option value="lastAdd">Last Added</option>
            <option value="firstAdd">First Added</option>
            <option value="cheapFirst">Cheap First</option>
            <option value="expFirst">Expensive First</option>
            <option value="makeA-Z">Make A - Z</option>
            <option value="makeZ-A">Make Z - A</option>
            <option value="oldFirst">Old First</option>
            <option value="newFirst">New First</option>
          </select>
        </div>
      </div>

      <div className="right">
        {/* changes autolisting display to row */}
        <div className="row-display-btn btn"></div>

        {/* changes autolisting display to grid */}
        <div className="grid-display-btn btn"></div>
      </div>
    </div>
  );
}

export default FilterRow;
