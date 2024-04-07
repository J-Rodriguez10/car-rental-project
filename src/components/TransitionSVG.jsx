function TransitionSVG({ placement, fill="white" }) {
  // Map placements to corresponding class names
  const placementMap = {
    "bottom-left": "placed-bottom-left",
    "bottom-right": "placed-bottom-right",
    "top-left": "placed-top-left",
    "top-right": "placed-top-right",
  };

  // Get the class name based on the placement
  const orientationClass = placementMap[placement.trim().toLowerCase()];

  return (
    <div className={`transition-svg ${orientationClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1000.1 -100.1 1000 100.2"
        preserveAspectRatio="none"
      >
        <path
          d="M -0 -6 V 0 h -1000 v -100 L -0 -6 z"
          stroke="none"
          strokeWidth="0.1"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default TransitionSVG;
