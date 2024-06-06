import AutolistingResults from "./AutolistingResults";
import FilterRow from "./FilterRow";
import FilterSidebar from "./FilterSidebar";

function AutolistingContainer() {
  return (
    <section className="autolisting-sect">
      <div className="container">

        <div className="grouping">
          <FilterRow />
          <AutolistingResults />
        </div>

        <FilterSidebar />
      </div>
    </section>
  );
}

export default AutolistingContainer;
