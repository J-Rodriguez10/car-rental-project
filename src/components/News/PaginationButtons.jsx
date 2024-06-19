function PaginationButtons({ maxAmnt, currIndex, updateIndex }) {
  // Function to handle the click on the "Next" button
  function handleNextClick() {
    if (currIndex < maxAmnt - 1) {
      updateIndex(currIndex + 1);
      window.scrollTo(0, 0);
    }
  }

  // Function to handle changing the page when a pagination button is clicked
  const handlePageChange = (index) => {
    updateIndex(index);
    window.scrollTo(0, 0);
  };

  // Function to get the class name for a pagination button
  function getPaginationButtonClassName(index) {
    return `pagination-btn ${currIndex === index && "pagination-btn-active"}`;
  }

  // Create an iterable array with length equal to maxAmnt
  const iterableArr = [...Array(maxAmnt)];

  return (
    <div className="pagination-btns">
      {/* Rendering all the Pagination Buttons */}
      {iterableArr.map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index)}
          className={getPaginationButtonClassName(index)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        disabled={currIndex >= maxAmnt - 1}
        onClick={handleNextClick}
        className="pagination-btn"
      >
        Next
      </button>
    </div>
  );
}

export default PaginationButtons;
